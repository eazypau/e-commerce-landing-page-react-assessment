import React from "react";
import ImageContainer from "./ImageContainer";

export default function ProductCard({ item }) {
	return (
		<div className="productCardContainer">
			<ImageContainer imageDetails={item.image} />
			<div>
				<h4>{item.title}</h4>
				<p>${item.price}</p>
			</div>
		</div>
	);
}
