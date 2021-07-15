import { AuthState } from "../../interfaces/redux-state";
import { getUserByUidSucsess } from "../../actions/auth";
import { AuthAction } from "../../interfaces/redux-action";

const initialState: AuthState = {
	loggedUser: null
};

export function auth(state: AuthState = initialState, action: AuthAction): AuthState {

	switch (action.type) {

		case getUserByUidSucsess.toString(): {
			return {
				...state,
				loggedUser: action.payload
			};
		}

		default: { return state; }
	}
}