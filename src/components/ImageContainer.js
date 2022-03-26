import React from "react";

export default function ImageContainer({ imageDetails }) {
	// set default image for images that does not exist
	const setDefaultImage = (e) => {
		try {
			// console.log(e);
			e.target.onerror = null;
			e.target.src =
				"https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";
		} catch (error) {
			
		}
	};
	return (
		<div className="imageContainer">
			<img
				src={imageDetails.src}
				alt={imageDetails.alt}
				loading="lazy"
				width={imageDetails.width}
				height={imageDetails.height}
				onError={(e) => setDefaultImage(e)}
			/>
		</div>
	);
}

// https://www.reddit.com/r/reactjs/comments/l2yz8h/how_to_check_if_image_exists/