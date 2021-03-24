import { call, put } from "redux-saga/effects";
import { setUser } from "../../ducks/user";
import { requestGetUser } from "../requests/user";

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}
