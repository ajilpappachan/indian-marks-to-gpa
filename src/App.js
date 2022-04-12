import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import Calculator from "./components/Calculator";
import HowItWorks from "./components/HowItWorks";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	const [data, setData] = useState([
		{ id: 0, subject: "Subject 1", marks: 90, grade: "a" },
		{ id: 1, subject: "Subject 2", marks: 80, grade: "b" },
		{ id: 3, subject: "Subject 3", marks: 60, grade: "c" },
	]);
	const [GPA, setGPA] = useState(0);

	const changeName = (id, name) => {
		setData(
			data.map((datum) => {
				datum.subject = datum.id === id ? name : datum.subject;
				return datum;
			})
		);
	};

	const changeMarks = (id, marks) => {
		setData(
			data.map((datum) => {
				if (datum.id === id) {
					datum.marks = marks;
					if (marks >= 60) datum.grade = "a";
					else if (marks >= 50) datum.grade = "b";
					else if (marks >= 40) datum.grade = "c";
					else datum.grade = "f";
				}
				return datum;
			})
		);
	};

	const addSubject = () => {
		setData([
			...data,
			{
				id: uuid(),
				subject: `Subject ${data.length + 1}`,
				marks: 0,
				grade: "f",
			},
		]);
	};

	const resetSubject = (id) => {
		setData(
			data.map((datum, index) => {
				if (datum.id === id) {
					datum.subject = `Subject ${index + 1}`;
					datum.marks = 0;
				}
				return datum;
			})
		);
	};

	const removeSubject = (id) => {
		setData(data.filter((datum) => datum.id !== id));
	};

	useEffect(() => {
		let gpa = 0;
		data.forEach((datum) => {
			switch (datum.grade) {
				case "a":
					gpa += 4.0;
					break;
				case "b":
					gpa += 3.0;
					break;
				case "c":
					gpa += 2.0;
					break;
				case "f":
					gpa += 0.0;
					break;
				default:
					break;
			}
		});
		setGPA(Math.round((gpa / data.length) * 100, 2) / 100);
	}, [data]);

	return (
		<div>
			<div className="container">
				<h1>Indian Marks to USA GPA Convertor</h1>
			</div>
			<div className="container d-flex flex-column flex-md-row">
				<div className="bg-secondary bg-gradient">
					<Calculator
						data={data}
						changeName={changeName}
						changeMarks={changeMarks}
						resetSubject={resetSubject}
						removeSubject={removeSubject}
						addSubject={addSubject}
						GPA={GPA}
					/>
				</div>
				<HowItWorks />
			</div>
		</div>
	);
};

export default App;
