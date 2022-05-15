import courses from "./cousres.js"
const ul = document.createElement("ul")
const inputFrom = document.getElementById("from")
const inputTo = document.getElementById("to")
const inputSubmit = document.querySelector(".submit")

courses.forEach(course => {
	if (course.prices[0] === null) {
		course.prices[0] = 0
	}
	if (course.prices[1] === null) {
		course.prices[1] = 0
	}
})


const main = document.querySelector(".container")
main.appendChild(ul)

const filterItem = (range, range2) => {
	if (!range2) range2 = 500
	if (!range) range = 0
	const filteredCourse = courses.filter(
		(course) =>
			course.prices[0] >= range &&
			course.prices[0] <= range2 &&
			course.prices[1] <= range2
	)
	return ul.innerHTML = (filteredCourse.map((item) => `<li>${item.name} ${item.prices}</li>`) )
}
filterItem()


inputSubmit.addEventListener("click", (e) => {
	e.preventDefault
	filterItem(inputFrom.value, inputTo.value)
})




	

