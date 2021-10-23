import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import moment from "moment";
// import swal from 'sweetalert2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// import { SaveLocalStorage } from "../utils/LocalStorage";
import { getAllLaunchList } from "../store/actions/Action";

function Upcoming() {
	const dispatch = useDispatch();
	// const data = useSelector(({ Reducer: { ...state } }) => {
	//   return { ...state }
	// })

	useEffect(() => {
		dispatch(getAllLaunchList());
	}, [dispatch]);

	const { launchList } = useSelector((state) => {
		return {
			launchList: state.Reducer.launchList,
		};
	});

	// const handleAddFavorites = (e) => {
	//   e.preventDefault()
	//   SaveLocalStorage(data)
	//   // console.log(data)
	//   swal.fire({
	//     title: "Confirmation",
	// 			icon: "success",
	// 			text: `Your launch has been added to favorites!`,
	// 			button: "OK",
	//   })
	// }

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
							<button
								className="buttonAdd"
								title="Add to favorites"
								// onClick={handleAddFavorites}
							>
								<FontAwesomeIcon icon={faPlus} />
							</button>
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
