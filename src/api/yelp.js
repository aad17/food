/** @format */

import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer VqlSgnnLoC_P43s9iBPdF3n6AMtARctl6bMmuN4S1jr3dfaffNYrNomsK_Px87IWMuXcvB38MYicZ5djTDyu5MjhRkDPM82jj6Cnldvx2RlTafLY5m-jo8U0TftFYXYx",
	},
});
