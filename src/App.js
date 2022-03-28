import LoadingSpinner from "./components/LoadingSpinner";
import TextInput from "./components/TextInput";
import SortDropDown from "./components/SortDropDown";
import ProductCard from "./components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const endPoint = "https://api-call-playground.eazypau.repl.co/products";
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState();
	const [filterTextInput, setFilterTextInput] = useState("");
	const [sortOption, setSortOption] = useState("alphabetAscending");

	const rgexAlphabets = /[^a-zA-Z]/g;
	const sortByOption = {
		alphabetAscending: (a, b) => {
			const productNameOne = a.title.replace(rgexAlphabets, "");
			const productNameTwo = b.title.replace(rgexAlphabets, "");
			if (productNameOne < productNameTwo) {
				return -1;
			}
			if (productNameOne > productNameTwo) {
				return 1;
			}
			return 0;
		},
		alphabetDescending: (a, b) => {
			const productNameOne = a.title.replace(rgexAlphabets, "");
			const productNameTwo = b.title.replace(rgexAlphabets, "");
			if (productNameOne < productNameTwo) {
				return 1;
			}
			if (productNameOne > productNameTwo) {
				return -1;
			}
			return 0;
		},
		priceAscending: (a, b) => {
			return a.price - b.price;
		},
		priceDescending: (a, b) => {
			return b.price - a.price;
		},
	};

	useEffect(() => {
		axios.get(endPoint).then((response) => {
			// console.log(response);
			setProducts(response.data.products);
			setLoading(false);
		});
	}, [endPoint]);

	const updateFilterTextInput = (newInput) => {
		setFilterTextInput(newInput);
	};

	const updateSortOption = (selectedSortOption) => {
		setSortOption(selectedSortOption);
	};

	return (
		<div className="App">
			<nav className="navBar">
				<div style={{ display: "flex" }}>
					{/* <h2>RomanticVal</h2> */}
					<img
						src={process.env.PUBLIC_URL + "/logo192.png"}
						alt="company logo"
						className="companyLogo"
					/>
					<span>Flowery Project</span>
				</div>
				<div>
					<div className="sortBox">
						<label>Sort By</label>
						<SortDropDown updateOption={updateSortOption} />
					</div>
					<div>
						<TextInput filterOnInput={updateFilterTextInput} />
					</div>
				</div>
			</nav>
			<div className="productGrid">
				{/* <LoadingSpinner /> */}
				{loading ? (
					<LoadingSpinner />
				) : (
					products
						.filter((item) => item.title.toLowerCase().includes(filterTextInput))
						.sort(sortByOption[sortOption])
						.map((item) => {
							return <ProductCard key={item.id} item={item} />;
						})
				)}
			</div>
		</div>
	);
}

export default App;

// https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering
// https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
