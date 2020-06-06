import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import ProjectPortfolio from '../projects/ProjectPortfolio';
import ProjectShowtime from '../projects/ProjectShowtime';
import ProjectSpaceMatch from '../projects/ProjectSpaceMatch';
import ProjectMyFitPlanner from '../projects/ProjectMyFitPlanner';

const AppRouter = () => (
	<Router>
		<div className="wrapper">
			<Switch>

				<Route path={'/'} exact><Home /></Route>
				<Route path={'/portfolio'} component={ProjectPortfolio}></Route>
				<Route path={'/showtime'} component={ProjectShowtime}></Route>
				<Route path={'/space-match'} component={ProjectSpaceMatch}></Route>
				<Route path={'/myfitplanner'} component={ProjectMyFitPlanner}></Route>
			</Switch>

			{/* <Particle color="#BBCBDD"/> */}
		</div>
	</Router>
	
);

export default AppRouter;
