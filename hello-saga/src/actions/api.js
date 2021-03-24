import { createAction } from '@reduxjs/toolkit'

export const apiCallBegan = createAction("users/get_users_request")

export const apiCallSuccess = createAction("users/get_users_success") 

export const apiCallFailed = createAction("users/get_users_failed")