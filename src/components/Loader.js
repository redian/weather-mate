import React from 'react';
import ProgressBar from 'react-toolbox/lib/progress_bar/ProgressBar';

const divStyle = {
    width: "100%",
    padding: 10,
    textAlign: "center"
};

const Loader = () => (
	<div style={divStyle}>
    <p>Loading...</p>
		<ProgressBar type="circular" mode="indeterminate" multicolor/>
	</div>
);

export default Loader;