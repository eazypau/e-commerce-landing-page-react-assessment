import React from "react";

export default function LoadingSpinner() {
	return (
		<div className="centerItemInScreen">
			<svg viewBox="25 25 50 50">
				<circle cx="50" cy="50" r="20"></circle>
			</svg>
		</div>
	);
}

// https://cssfx.netlify.app/