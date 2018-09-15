import React from "react";

const PeopleBox = (props) => (
	<div className="peopleBox">
		
		<img src={props.profileURL} alt={props.name} />
		
		<div>
			<h3>{props.name}</h3>
			<p>{props.description}</p>
		</div>
		
	</div>
);

export default PeopleBox;