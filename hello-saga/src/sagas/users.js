import { select, takeEvery, call, fork, put } from 'redux-saga/effects'
import * as userReducer from "../reducers/users"
import * as api from '../api/users'

function* getUsers(){
    try {
        const result = yield call(api.getUsersFromServer)

        yield put(userReducer.getUserSuccess({
            items: result.data.data
        }))

    } catch (e) {
        console.log("Error", e)
    }
}

function* watchGetUsersRequest(){
    yield takeEvery(userReducer.getUser.type, getUsers)
}

function* watchAndLog() {
  yield takeEvery('*', function* logger(action) {
    const state = yield select()

    console.log('action', action)
    console.log('state after', state)
  })
}

const usersSaga = [
    fork(watchGetUsersRequest), fork(watchAndLog)
];

export default usersSaga;