import courses from "./cousres.js"
const ul = document.createElement("ul")
const inputFrom = document.getElementById("from")
const inputTo = document.getElementById("to")
const inputSubmit = document.querySelector(".submit")

// converting all nulls to 0
courses.forEach(course => {
	if (course.prices[0] === null) {
		course.prices[0] = 0
	}
	if (course.prices[1] === null) {
		course.prices[1] = 0
	}
	if (course.prices[0] > course.prices[1]) {
		[course.prices[0], course.prices[1]] = [course.prices[1], course.prices[0]] 
	}
})


const main = document.querySelector(".container")
main.appendChild(ul)

// Main algorithm
const filterItem = (range, range2) => {
	if (!range2) range2 = 500
	if (!range) range = 0
	const filteredCourse = courses.filter(
		(course) =>
			course.prices[0] >= range &&
			course.prices[0] <= range2 &&
			course.prices[1] <= range2
	)
	return (ul.innerHTML = filteredCourse.map(
		(item) => `<li>${item.name} ${item.prices[0]} - ${item.prices[1]} usd</li>`
	))
}
filterItem()

// Change value and submit
inputSubmit.addEventListener("click", (e) => {
	e.preventDefault
	filterItem(inputFrom.value, inputTo.value)
})

