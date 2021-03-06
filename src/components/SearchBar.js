/** @format */

import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name="search" style={styles.iconStyle} />
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				placeholder="Search"
				style={styles.inputStyle}
				value={term}
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
};

export default SearchBar;

const styles = StyleSheet.create({
	backgroundStyle: {
		marginTop: 10,
		backgroundColor: "#F0EEEE",
		height: 50,
		borderRadius: 10,
		marginHorizontal: 15,
		flexDirection: "row",
		marginBottom: 10,
	},
	inputStyle: {
		flex: 1,
		fontSize: 18,
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: "center",
		marginRight: 15,
		marginLeft: 5,
	},
});
