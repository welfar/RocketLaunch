import { Link } from "react-router-dom";

import Time from "../components/Time";

import "../styles/Time.css";

function Countdown() {
	return (
		<>
			<div className="container-countdown">
				<Time />
			</div>
			<div className="link-container">
				<>
					<Link to="/UpcomingLaunches" className="link-navigation">
						Upcoming Launches
					</Link>
				</>
				<>
					<Link to="/FavoriteLunches" className="link-navigation">
						Favorites
					</Link>
				</>
			</div>
		</>
	);
}

export default Countdown;
