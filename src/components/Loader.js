import React from 'react';
import ProgressBar from 'react-toolbox/lib/progress_bar/ProgressBar';

const divStyle = {
    width: "100%",
    padding: 10,
    textAlign: "center"
};

const Loader = (props) => {
  let res = null;
  if (props.loading) {
    res = 
      <div style={divStyle}>
        <p>Loading...</p>
        <ProgressBar type="circular" mode="indeterminate" multicolor/>
      </div>
  }
  return res;
};

export default Loader;