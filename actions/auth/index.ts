/* eslint-disable @typescript-eslint/ban-types */
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { createAction } from 'redux-actions';
import { database } from "../../config/firebase";
import { DATABASE_REF } from "../../config/database-ref";

export const getUserByUidSucsess = createAction('GET_USER_BY_UID_SUCCESS');

export const getUserByUid = (uid: string) => {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
		return database.ref(DATABASE_REF.USERS)
			.child(uid)
			.on('value', (snap) => dispatch(getUserByUidSucsess(snap.val())));
	};
};