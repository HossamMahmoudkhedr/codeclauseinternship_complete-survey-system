import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
	return (
		<div className="container-fluid text-white">
			<header className="border-1 border-bottom border-white py-3 text-center">
				<h1>System Survey</h1>
			</header>

			<Outlet />
		</div>
	);
};

export default Root;
