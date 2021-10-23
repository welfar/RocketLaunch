import axios from "axios";

import {
	GET_ROCKET_INFO,
	GET_ROCKET_LAUNCH,
	GET_LAUNCH_LIST,
} from "../reducers/Reducer";

export function getRocketInfo() {
	return async function (dispatch) {
		try {
			const { data } = await axios.get(
				`https://api.spacexdata.com/v3/launches/next`
			);
			dispatch({
				type: GET_ROCKET_INFO,
				payload: data,
			});
		} catch (err) {
			console.log(err.message);
		}
	};
}

export function getRocketLaunch() {
	return async function (dispatch) {
		try {
			const { data } = await axios.get(
				`https://api.spacexdata.com/v3/launches/upcoming`
			);
			dispatch({
				type: GET_ROCKET_LAUNCH,
				payload: data,
			});
		} catch (err) {
			console.log(err.message);
		}
	};
}

export function getAllLaunchList() {
	return async function (dispatch) {
		try {
			const { data } = await axios.get(
				`https://api.spacexdata.com/v3/launches/upcoming`
			);
			dispatch({
				type: GET_LAUNCH_LIST,
				payload: data,
			});
		} catch (err) {
			console.log(err.message);
		}
	};
}
