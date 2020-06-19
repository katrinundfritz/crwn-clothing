import { all, call } from 'redux-saga/effects'

import { fetchCollectionStart } from './shop/shop.sagas'
import { onGoogleSignInStart, onEmailSigninStart, onCheckUserSession, onSignOutStart } from './user/user.sagas'

export default function* rootSaga() {
  yield all([
    call(fetchCollectionStart),
    call(onGoogleSignInStart),
    call(onEmailSigninStart),
    call(onCheckUserSession),
    call(onSignOutStart),
  ])
}
