import React from "react";

export default function SortDropDown({ updateOption }) {
	const updateSelectedOption = (e) => {
		console.log(e.target.value);
		updateOption(e.target.value);
	};

	return (
		<select
			name="sortingOption"
			id="sortingOption"
			className="selectBox"
			onChange={(e) => updateSelectedOption(e)}
		>
			<option value="alphabetAscending">Alphabet: A to Z</option>
			<option value="alphabetDescending">Alphabet: Z to A</option>
			<option value="priceAscending">Price: Low to High</option>
			<option value="priceDescending">Price: High to Low</option>
		</select>
	);
}
