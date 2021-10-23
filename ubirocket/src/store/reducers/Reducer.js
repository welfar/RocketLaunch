export const GET_ROCKET_LAUNCH = "GET_ROCKET_LAUNCH";
export const GET_LAUNCH_LIST = "GET_LAUNCH_LIST";
export const GET_ROCKET_INFO = "GET_ROCKET_INFO";

const initialState = {
	rocketInfo: {},
	rocketLaunch: {},
	launchList: [],
};

export function Reducer(state = initialState, action) {
	switch (action.type) {
		case GET_ROCKET_INFO: {
			return {
				...state,
				rocketInfo: action.payload,
			};
		}
		case GET_ROCKET_LAUNCH: {
			return {
				...state,
				rocketLaunch: action.payload,
			};
		}
		case GET_LAUNCH_LIST: {
			return {
				...state,
				launchList: action.payload,
			};
		}
		default:
			return state;
	}
}
