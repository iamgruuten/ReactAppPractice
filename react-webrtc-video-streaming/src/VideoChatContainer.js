import React from 'react'
import './App.css'
import 'firebase/database'

import firebase from 'firebase/app'
import config from './config'
import VideoChat from './VideoChat'
import { addCandidate, createOffer, initiateConnection, initiateLocalStream, listenToConnectionEvents, sendAnswer, startCall} from './modules/RTCModule'
import { doAnswer, doCandidate, doLogin, doOffer } from './modules/FirebaseModule'
import 'webrtc-adapter'

class VideoChatContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      database: null,
      connectedUser: null,
      localStream: null,
      localConnection: null
    }

    this.localVideoRef = React.createRef()
    this.remoteVideoRef = React.createRef()
  }

    componentDidMount = async () => {
      // initialize firebase
      firebase.initializeApp(config)

      // getting local video stream
      const localStream = await initiateLocalStream()
      this.localVideoRef.srcObject = localStream

      // create the local connection
      const localConnection = await initiateConnection();
      this.setState(
        {
          database: firebase.database(),
          localStream,
          localConnection
        }
      )

    }

    shouldComponentUpdate (nextProps, nextState) {
      // prevent rerenders if not necessary
      if(this.state.database !== nextState.database){
        return false;
      }

      if(this.state.localStream !== nextState.localStream){
        return false;
      }

      if(this.state.localConnection !== nextState.localConnection){
        return false;
      }

      return true
    }

    startCall = async (username, userToCall) => {
      const { localConnection, database, localStream } = this.state

      // listen to the events first
      listenToConnectionEvents(localConnection, username, userToCall, database, this.remoteVideoRef, doCandidate)

      // create a new offer
      createOffer(localConnection, localStream, userToCall, doOffer, database, username)

    }

    onLogin = async (username) => {
      // do the login phase
      return await doLogin(username, this.state.database, this.handleUpdate)

    }

    setLocalVideoRef = ref => {
      this.localVideoRef = ref
    }

    setRemoteVideoRef = ref => {
      this.remoteVideoRef = ref
    }

    handleUpdate = (notif, username) => {
      // read the received notif and apply it
      const {database, localConnection, localStream} = this.state;

      if(notif){
        switch(notif.type){
          case 'offer':

            this.setState({
              connectedUser: notif.from
            })

            //listen
            listenToConnectionEvents(localConnection, username, notif.from, database, this.remoteVideoRef, doCandidate)
            //send answer
            sendAnswer(localConnection, localStream, notif, doAnswer, database, username)
            break;
          case 'answer':
            //start the call
            this.setState({
              connectedUser: notif.from
            })

            startCall(localConnection, notif)
            break;
          case 'candidate':
            //add candidate to connection
            addCandidate(localConnection, notif)
            break;
          default:
            break;
        }
      }
    }

    render () {
      return <VideoChat
        startCall={this.startCall}
        onLogin={this.onLogin}
        setLocalVideoRef={this.setLocalVideoRef}
        setRemoteVideoRef={this.setRemoteVideoRef}
        connectedUser={this.state.connectedUser}
      />
    }
}

export default VideoChatContainer
