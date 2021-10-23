import { Link } from "react-router-dom";

import Upcoming from "../components/Upcoming";
import {
	FacebookShareButton,
	WhatsappShareButton,
	WhatsappIcon,
	FacebookIcon,
} from "react-share";

import "../styles/Upcoming.css";

function NextLaunches() {
	const shareUrl = "http://localhost:3000/UpcomingLaunches";

	return (
		<>
			<div className="container-nextLaunch">
				<Upcoming />
			</div>
			<div className="link-container">
				<>
					<Link to="/" className="link-navigation">
						Countdown
					</Link>
				</>
				<>
					<Link to="/FavoriteLunches" className="link-navigation">
						Favorites
					</Link>
				</>
			</div>
			<p>Share the launches:</p>
			<FacebookShareButton url={shareUrl}>
				<FacebookIcon size={40} round={true} />
			</FacebookShareButton>
			<WhatsappShareButton url={shareUrl}>
				<WhatsappIcon size={40} round={true} />
			</WhatsappShareButton>
		</>
	);
}

export default NextLaunches;
