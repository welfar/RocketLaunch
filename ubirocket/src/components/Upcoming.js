import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import moment from "moment";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

import { getAllLaunchList } from "../store/actions/Action";

function Upcoming() {
	const dispatch = useDispatch();

	const [favorites, setFavorites] = useState([]);
	const getArray = JSON.parse(localStorage.getItem("favorites") || "0");

	useEffect(() => {
		if (getArray !== 0) {
			setFavorites([...getArray]);
		}
	}, []);

	useEffect(() => {
		dispatch(getAllLaunchList());
	}, [dispatch]);

	const { launchList } = useSelector((state) => {
		return {
			launchList: state.Reducer.launchList,
		};
	});

	const addFav = (props) => {
		let array = favorites;
		let addArray = true;
		array.map((item, key) => {
			if (item === props.i) {
				array.splice(key, 1);
				addArray = false;
			}
		});
		if (addArray) {
			array.push(props.i);
		}
		setFavorites([...array]);
		localStorage.setItem("favorites", JSON.stringify(favorites));

		let storage = localStorage.getItem("favItem" + props.i || "0");
		if (storage == null) {
			localStorage.setItem("favItem" + props.i, JSON.stringify(props.items));
		} else {
			localStorage.removeItem("favItem" + props.i);
		}
	};

	const renderTable = () => {
		return (
			!!launchList &&
			launchList.length > 0 &&
			launchList.map((rocketLaunch) => {
				return (
					<tr>
						<td>{rocketLaunch.mission_name}</td>
						<td>{moment(rocketLaunch.launch_date_utc).format("ll")}</td>
						<td>{rocketLaunch.launch_site.site_name}</td>
						<td>
							{favorites.includes(rocketLaunch.mission_name) ? (
								<IoIosHeart
									onClick={() =>
										addFav({
											items: rocketLaunch,
											i: rocketLaunch.mission_name,
										})
									}
									style={{ color: "yellow" }}
								/>
							) : (
								<IoIosHeartEmpty
									onClick={() =>
										addFav({
											items: rocketLaunch,
											i: rocketLaunch.mission_name,
										})
									}
									style={{ color: "yellow" }}
								/>
							)}
						</td>
					</tr>
				);
			})
		);
	};

	return (
		<>
			<p className="nextLaunch-title">Upcoming - Next Launches</p>
			<div className="table-container">
				<table>
					<thead>
						<tr>
							<th>Mission</th>
							<th>Date (UTC)</th>
							<th>Launchpad</th>
							<th>Add Favorite</th>
						</tr>
					</thead>
					<tbody>{renderTable()}</tbody>
				</table>
			</div>
		</>
	);
}

export default Upcoming;
