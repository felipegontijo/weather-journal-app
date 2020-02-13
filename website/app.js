/* Weather API */

let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
let apiKey = '&appid=835a7c7c37c90166525f435f5bc6c601'

/* Generate new date in string format */
const date = new Date();
const dateString = date.toDateString();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', displayWeatherInformation)

/* Function called by event listener */
async function displayWeatherInformation (event) {
    event.preventDefault();

    const inputZip = document.getElementById('zip').value;
    const inputFeeling = document.getElementById('feelings').value;

    const apiResponse = await getApiData(baseURL, inputZip, apiKey);
    await postData('/add', {
            date: dateString,
            temp: apiResponse.main.temp,
            user: inputFeeling
    })
    await updateUserInterface();
}

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

const updateUserInterface = async () => {
    const requestedData = await getData('/all');
    try {
        document.getElementById('date').innerHTML = `Today is ${requestedData.date}`;
        document.getElementById('temp').innerHTML = `The current temperature is ${requestedData.temp}`;
        document.getElementById('content').innerHTML = `You are feeling ${requestedData.user}`;
    } catch(error) {
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