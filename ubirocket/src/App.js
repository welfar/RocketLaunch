import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Countdown from "./views/Countdown";
import NextLaunches from "./views/NextLaunches";
import Favorites from "./views/Favorites";
import NotFound from "./views/NotFound";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Countdown} />
				<Route exact path="/UpcomingLaunches" component={NextLaunches} />
				<Route exact path="/FavoriteLunches" component={Favorites} />
				<Route exact path="*" component={NotFound} />
			</Switch>
		</Router>
	);
}

export default App;
