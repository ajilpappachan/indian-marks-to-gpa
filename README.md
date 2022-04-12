# Indian Marks to USA GPA Convertor

A simple web application to convert Indian Marks (percentage) to American GPA.

The Application is hosted [here](https://ajilpappachan.github.com/indian-marks-to-gpa).

## Introduction

Recently, I was trying to convert my university scores to GPA from my undergraduate program to apply for graduate programs abroad. But according to Wikipedia, Indian grading system is different from the American system and requires one additional step in the calculation. Instead of doing the math like a normal person, I created this web application to convert my marks to GPA like a true programmer. I am hosting the application in case someone else finds it useful.

## How It Works

This is the US Equivilent grade for Indian marks (percentage) according to [this Wikipedia article](https://en.wikipedia.org/wiki/Academic_grading_in_India#cite_note-8).

| Scale  | U.S. Grade Equiv. |
| ------ | ----------------- |
| 60-100 | A                 |
| 50-59  | B                 |
| 40-49  | C                 |
| <40    | F                 |

The Application first converts the marks to U.S equivalent grades and then uses the following table to convert grades to grade points.

| Letter Grade | 4.0 Scale |
| ------------ | --------- |
| A            | 4.0       |
| B            | 3.0       |
| C            | 2.0       |
| F            | 0.0       |

**Grade Point Average** is the average of the scores in the 4.0 scale.
