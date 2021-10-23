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
		let year = new Date().getFullYear();
		let difference = +new Date(`${year}/11/24`) - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				DAYS: Math.floor(difference / (1000 * 60 * 60 * 24)),
				HOURS: Math.floor((difference / (1000 * 60 * 60)) % 24),
				MINUTES: Math.floor((difference / 1000 / 60) % 60),
				SECONDS: Math.floor((difference / 1000) % 60),
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
		if (!timeLeft[interval]) {
			return;
		}

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
