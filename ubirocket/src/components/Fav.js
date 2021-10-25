import moment from "moment";

import "../styles/Fav.css";

function Fav() {
	let favList = [];
	const getArray = JSON.parse(localStorage.getItem("favorites") || "0");
	for (let i = 0; i < getArray.length; i++) {
		let x = getArray[i];
		favList[i] = JSON.parse(localStorage.getItem("favItem" + [x]) || "");
	}

	return (
		<>
			<p className="favorite-title">Favorites items</p>
			<div className="table-container">
				<table>
					<thead>
						<tr>
							<th>Mission</th>
							<th>Date (UTC)</th>
							<th>Launchpad</th>
						</tr>
					</thead>
					<tbody>
						{favList.map((rocketLaunch) => (
							<tr key={rocketLaunch.mission_name}>
								<td>{rocketLaunch.mission_name}</td>
								<td>{moment(rocketLaunch.launch_date_utc).format("ll")}</td>
								<td>{rocketLaunch.launch_site.site_name}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default Fav;
