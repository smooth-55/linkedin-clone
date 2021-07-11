import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
	const recentItem = (topic) => (
		<div className="sidebar__recentItem">
			<span className="sidebar__hash">#</span>
			<p>{topic}</p>
		</div>
	);
	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img
					src="https://images.unsplash.com/photo-1557367184-663fba4b8b91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
					alt=""
				/>
				<Avatar className="sidebar__avatar" />
				<h2>Ashish Dhakal</h2>
				<h4>dhakalashish18@gmail.com</h4>
			</div>
			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who viewed you</p>
					<p className="sidebar__statNumber">2,543</p>
				</div>
				<div className="sidebar__stat">
					<p>Views on post</p>
					<p className="sidebar__statNumber">2,444</p>
				</div>
			</div>
			<div className="sidebar__button">
				<p>Recent</p>
				{recentItem("reactjs")}
				{recentItem("python django")}
				{recentItem("backend")}
			</div>
		</div>
	);
}

export default Sidebar;