import { call } from '@redux-saga/core/effects'
import { connect } from 'react-redux'
import * as userReducer from '../reducers/users'
import UserList from './userLists'

const App = (props) => {
    props.getUser()
    const users = props.users;
    console.log("User retrieved", props)
    return (
      <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
          <UserList users={users.items} />
      </div>  
    );
}

export default connect(null, userReducer)(App);