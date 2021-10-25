import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getRocketInfo } from "../store/actions/Action";

function Time() {
	const dispatch = useDispatch();

	const { rocketInfo } = useSelector((state) => {
		return {
			rocketInfo: state.Reducer.rocketInfo,
		};
	});

	const calculateTimeLeft = () => {
		let difference = +new Date(rocketInfo.launch_date_local) - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				DAYS: Math.floor(difference / (1000 * 60 * 60 * 24)) || 0,
				HOURS: Math.floor((difference / (1000 * 60 * 60)) % 24) || 0,
				MINUTES: Math.floor((difference / 1000 / 60) % 60) || 0,
				SECONDS: Math.floor((difference / 1000) % 60) || 0,
			};
		}
		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
    dispatch(getRocketInfo());
  },[dispatch]);
  
	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
	});

	const timerComponents = [];

	Object.keys(timeLeft).forEach((interval) => {
		timerComponents.push(
			<span>
				<div className="inter">{timeLeft[interval]}</div>
				<div>{interval} </div>
			</span>
		);
	});

	return (
		<>
			<p className="countdown-title">Upcoming: {rocketInfo.mission_name}</p>
			<div className="time-table">
				{timerComponents.length ? timerComponents : <span>Time's up!</span>}
			</div>
		</>
	);
}

export default Time;
