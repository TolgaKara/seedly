import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./routing/PrivateRoute";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import UserProfile from "./components/UserProfile/UserProfile";
import UpdateProfile from "./components/UserProfile/UpdateProfile";
import { Landingpage } from "./components/Landingpage/Landingpage.jsx";

function App() {
	return (
		<div className='bg-white'>
			<Header />
			<div className='text-2xl'>
				<Switch>
					{/* Landingpage */}
					<Route exact path='/' component={Landingpage} />
					{/* Authentication */}
					<Route exact path='/signin' component={SignIn} />
					<Route exact path='/signup' component={SignUp} />
					<Route exact path='/forgotpassword' component={ForgotPassword} />
					{/*User Area*/}
					<PrivateRoute exact path='/' component={UserDashboard} />
					<PrivateRoute exact path='/profile' component={UserProfile} />
					<PrivateRoute exact path='/update-profile' component={UpdateProfile} />
				</Switch>
			</div>
			<Footer />
		</div>
	);
}

export default App;
