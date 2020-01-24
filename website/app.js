/* Weather API */

let baseURL = 'api.openweathermap.org'
let apiKey = '835a7c7c37c90166525f435f5bc6c601'

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/
const getApiData = async (url, element, key) => {
    const res = await fetch(url+element+key);
    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('error', error);
    }
}

/* Function to POST data */


/* Function to GET Project Data */
const getData = async (url = '') => {
    // make the request to the url
    const request = await fetch(url);

    try {
        // transform requested data into JSON if success
        const newData = await request.json();
        // return the transformed data
        return newData;
    } catch (error) {
        // couldn't retrieve the requested data
        console.log('error', error);
    }
}