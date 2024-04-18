/**
 * Function to get the locations from the local storage and display them in the header
 */
export const myLocations = () => {
	// Get the locations from array in the local storage
	const locations = JSON.parse(localStorage.getItem('pollLocations'))
	
	// If locations exist
	if(locations) {
		// Create a select element
		const select = document.createElement('select')

		// Loop through the locations array
		for(let location of locations) {
			// Create an option element
			const option = document.createElement('option')
			// Set the value and text content for the option element
			option.value = location.city
			// option.innerText = location.city
			option.textContent = location.city
			// Append the option element to the select element
			select.appendChild(option)
		}
		// Append the select element to the header element
		document.querySelector('header').appendChild(select)
	}
}