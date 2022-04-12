import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Subject = (props) => {
	const { data, changeName, changeMarks, resetSubject, removeSubject } = props;
	const { id, subject, marks, grade } = data;

	const handleNameChange = (e) => {
		changeName(id, e.target.value);
	};

	const handleMarksChange = (e) => {
		changeMarks(id, e.target.value);
	};

	const handleReset = (e) => {
		resetSubject(id);
	};

	const handleRemove = (e) => {
		removeSubject(id);
	};

	return (
		<div className="Subject m-3 d-flex">
			<div className="Subject-inputs p-2 d-flex flex-column">
				<input
					type="text"
					className="Subject-name"
					value={subject}
					placeholder="Subject Name"
					onChange={handleNameChange}
				/>
				<input
					type="number"
					className="Subject-marks"
					value={marks}
					onChange={handleMarksChange}
				/>
				<input
					type="text"
					className="Subject-grade"
					value={grade.toUpperCase()}
					placeholder="Grade"
					readOnly
				/>
			</div>
			<div className="Subject-buttons p-2 d-flex flex-column">
				<button className="btn btn-secondary m-1" onClick={handleReset}>
					<FontAwesomeIcon icon={faRotateLeft} />
				</button>
				<button className="btn btn-secondary m-1" onClick={handleRemove}>
					<FontAwesomeIcon icon={faTrashCan} />
				</button>
			</div>
		</div>
	);
};

export default Subject;
