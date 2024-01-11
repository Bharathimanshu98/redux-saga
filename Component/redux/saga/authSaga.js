import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { loginSuccess, loginFailure } from '../actions/authActions';

function* login(action) {
  try {
    const response = yield call(apiLogin, action.payload);
    yield put(loginSuccess(response.data));
    //Asystoe.addItem("token",response.data.token)
    alert("Login Sucess")
    
    console.log(response.data,'res');
  } catch (error) {
    console.log(error.response,'err');

    yield put(loginFailure(error.message));
  }
}

function apiLogin(credentials) {
  
  return axios.post('http://13.235.248.22/api/v1/user/login', credentials);
}

export function* watchLogin() {
  yield takeLatest('LOGIN_REQUEST', login);
}
