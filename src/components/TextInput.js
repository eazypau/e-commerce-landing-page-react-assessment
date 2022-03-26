import React, { useRef } from "react";

export default function TextInput({ filterOnInput }) {
	const userInput = useRef("");

	const updateInput = () => {
		filterOnInput(userInput.current.value.toLowerCase())
	}

	return (
		<input type="text" name="filterName" id="filterName" placeholder="Search" ref={userInput} onInput={updateInput} />
	);
}
