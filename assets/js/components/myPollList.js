import { myFetch } from "../Utils/apiUtils.js"
import { getFriendlyPollName, getLocation, getPollImage } from "../Utils/customUtils.js"

/**
 * Function to get the current pollen data
 */
export const myPollList = async () => {
	const location = await getLocation()
	// Fetch data from the API
	const endpoint = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.52&longitude=13.41&current=alder_pollen,birch_pollen,grass_pollen,mugwort_pollen,olive_pollen,ragweed_pollen&hourly=alder_pollen,birch_pollen,grass_pollen,mugwort_pollen,olive_pollen,ragweed_pollen&timezone=Europe%2FBerlin&forecast_days=1`
	const result = await myFetch(endpoint)
	// Destructure current object from the result object
	const { current } = result
	// Get the keys from the current object and slice the first two keys
	const arrPolls = Object.keys(current).slice(2)

	// Create a ul element
	const ul = document.createElement('ul')

	// Loop through the arrPolls array
	arrPolls.map(value => {
		// console.log(value);

		// Create a li element
		const li = document.createElement('li')
		// Create a span element for image
		const span_image = document.createElement('span')
		const img = document.createElement('img')
		// Set the src attribute for the image element with the getPollImage function
		img.src = `./assets/images/${getPollImage(value)}`
		span_image.appendChild(img)

		// Create a span element for name
		const span_name = document.createElement('span')
		// Set the text content for the span element with the getFriendlyPollName function
		span_name.innerText = getFriendlyPollName(value)

		// Create a span element for number
		const span_number = document.createElement('span')
		// Set the text content for the span element with the current object
		span_number.innerText = current[value]
		
		// Append the span elements to the li element
		li.append(span_image, span_name, span_number)
		// Append the li element to the ul element
		ul.appendChild(li)
	})

	// Append the ul element to the main element
	document.querySelector('main').appendChild(ul)
}