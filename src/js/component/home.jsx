import React from "react";

import Hue from './Hue.jsx';
import Saturation from './Saturation.jsx';
import Lightness from './Lightness.jsx';
import AlphaOpacity from './AlphaOpacity.jsx';

const Home = () => {
	return (
		<>
			<Hue/>
			<Saturation/>
			<Lightness />
			<AlphaOpacity />
		</>
	)
		
};

export default Home;
