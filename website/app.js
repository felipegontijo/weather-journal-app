/* Weather API */

let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip='
let apiKey = '&appid=835a7c7c37c90166525f435f5bc6c601'

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
const postData = async (url = '', data = {}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match 'Content-Type' header
    });
    try {
        const newData = await res.json();
        return newData;
    } catch (error) {
        console.log('error', error);
    }
}

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