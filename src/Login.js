import React, { useState } from "react";
import { auth } from "./firebase";
import { login } from "./features/userSlice";
import "./Login.css";
import { useDispatch } from "react-redux";
function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [profilePic, setProfilePic] = useState("");
	const dispatch = useDispatch();

	const loginToApp = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.user.displayName,
						profilePic: userAuth.user.photoURL,
					})
				);
			})
			.catch((error) => alert(error));
	};

	const register = () => {
		if (!name) {
			return alert("Enter full name");
		}

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoURL: profilePic,
					})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoUrl: profilePic,
							})
						);
					});
			})
			.catch((error) => alert(error));
	};

	return (
		<div className="login">
			<img
				src="https://seeklogo.com/images/L/linkedin-logo-F84AF05CFC-seeklogo.com.png"
				alt=""
			/>
			<form>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Full name (required if registering)"
				/>

				<input
					type="text"
					value={profilePic}
					onChange={(e) => setProfilePic(e.target.value)}
					placeholder="Profile pic url (Optional)"
				/>

				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
				/>

				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>

				<button type="submit" onClick={loginToApp}>
					Sign In
				</button>
			</form>
			<p>
				Not a member? &nbsp;
				<span className="login__register" onClick={register}>
					Register now
				</span>
			</p>
		</div>
	);
}

export default Login;
