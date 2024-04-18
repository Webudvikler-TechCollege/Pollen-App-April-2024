import { myFetch } from "../Utils/apiUtils.js"
import { getFriendlyPollName, getPollImage } from "../Utils/customUtils.js"

export const myPollList = async () => {
	const endpoint = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.52&longitude=13.41&current=alder_pollen,birch_pollen,grass_pollen,mugwort_pollen,olive_pollen,ragweed_pollen&hourly=alder_pollen,birch_pollen,grass_pollen,mugwort_pollen,olive_pollen,ragweed_pollen&timezone=Europe%2FBerlin&forecast_days=1`
	const result = await myFetch(endpoint)

	const { current } = result
	const arrPolls = Object.keys(current).slice(2)

	const ul = document.createElement('ul')

	arrPolls.map(value => {
		console.log(value);
		const li = document.createElement('li')

		const span_image = document.createElement('span')
		const img = document.createElement('img')
		img.src = `./assets/images/${getPollImage(value)}`
		span_image.appendChild(img)

		const span_name = document.createElement('span')
		span_name.innerText = getFriendlyPollName(value)

		const span_number = document.createElement('span')
		span_number.innerText = current[value]
		
		li.append(span_image, span_name, span_number)
		ul.appendChild(li)
	})

	document.querySelector('main').appendChild(ul)

	console.log(ul);
}