import { Link } from "react-router-dom";

import Fav from "../components/Fav";

function Favorites() {
	return (
		<>
			<>
				<Fav />
			</>
			<div className="link-container">
				<>
					<Link to="/" className="link-navigation">
						Countdown
					</Link>
				</>
				<>
					<Link to="/UpcomingLaunches" className="link-navigation">
						Upcoming Launches
					</Link>
				</>
			</div>
		</>
	);
}

export default Favorites;
