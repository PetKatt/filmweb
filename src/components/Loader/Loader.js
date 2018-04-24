import React from "react";

import classes from "./Loader.css"

const loader = (props) => (
	<div className={classes.Loader}>{props.action}</div>
);

export default loader;