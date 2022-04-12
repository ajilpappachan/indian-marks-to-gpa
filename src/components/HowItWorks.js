import React from "react";

const HowItWorks = () => {
	return (
		<div className="m-3">
			<h2>Introduction</h2>
			<p>
				Recently, I was trying to convert my university scores to GPA from my
				undergraduate program to apply for graduate programs abroad. But
				according to Wikipedia, Indian grading system is different from the
				American system and requires one additional step in the calculation.
				Instead of doing the math like a normal person, I created this web
				application to convert my marks to GPA like a true programmer. I am
				hosting the application in case someone else finds it useful.
			</p>
			<h2>How It Works</h2>
			<p>
				This is the US Equivilent grade for Indian marks (percentage) according
				to{" "}
				<a href="https://en.wikipedia.org/wiki/Academic_grading_in_India#cite_note-8">
					this Wikipedia article
				</a>
				.
			</p>
			<table>
				<thead>
					<td>Scale</td>
					<td>U.S Grade Equiv.</td>
				</thead>
				<tbody>
					<tr>
						<td>60-100</td>
						<td>A</td>
					</tr>
					<tr>
						<td>50-59</td>
						<td>B</td>
					</tr>
					<tr>
						<td>40-49</td>
						<td>C</td>
					</tr>
					<tr>
						<td>&lt;40</td>
						<td>F</td>
					</tr>
				</tbody>
			</table>
			<p>
				The Application first converts the marks to U.S equivalent grades and
				then uses the following table to convert grades to grade points.
			</p>
			<table>
				<thead>
					<td>Letter Grade</td>
					<td>4.0 Scale</td>
				</thead>
				<tbody>
					<tr>
						<td>A</td>
						<td>4.0</td>
					</tr>
					<tr>
						<td>B</td>
						<td>3.0</td>
					</tr>
					<tr>
						<td>C</td>
						<td>2.0</td>
					</tr>
					<tr>
						<td>F</td>
						<td>0</td>
					</tr>
				</tbody>
			</table>
			<p>
				<strong>Grade Point Average</strong> is the average of the scores in the
				4.0 scale.
			</p>
		</div>
	);
};

export default HowItWorks;
