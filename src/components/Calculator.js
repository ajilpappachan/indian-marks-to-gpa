import React from "react";

import Subject from "../components/Subject";

const Calculator = (props) => {
	const {
		data,
		changeName,
		changeMarks,
		resetSubject,
		removeSubject,
		addSubject,
		GPA,
	} = props;
	return (
		<div className="Calculator m-2">
			<div className="Calculator-subjects">
				{data.map((datum) => {
					return (
						<Subject
							data={datum}
							changeName={changeName}
							changeMarks={changeMarks}
							resetSubject={resetSubject}
							removeSubject={removeSubject}
							key={datum.id}
						/>
					);
				})}
			</div>
			<div className="Calculator-add d-flex m-2 align-items-center">
				<button className="btn btn-primary m-2" onClick={addSubject}>
					Add New
				</button>
				<span className="text-white fw-bold">GPA: {GPA}</span>
			</div>
		</div>
	);
};

export default Calculator;
