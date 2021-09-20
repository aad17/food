/** @format */

import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
	const [resuts, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const searchApi = async (searchTerm) => {
		try {
			const resposnse = await yelp.get("/search", {
				params: {
					limit: 50,
					term: searchTerm,
					location: "san jose",
				},
			});
			setResults(resposnse.data.businesses);
		} catch (err) {
			setErrorMessage("Something went wrong");
		}
	};

	//For rendering initially some results on the screen before the user search
	//Empty array is used because we only want to render it once
	//If we do not put empty array then it calls searches the api infinitely and renders it infinitely.
	useEffect(() => {
		searchApi("Pasta");
	}, []);

	return [searchApi, resuts, errorMessage];
};
