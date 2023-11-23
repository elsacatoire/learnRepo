// Import the Axios library, which allows making HTTP requests from the browser or Node.js.
import axios from 'axios';

// Export an instance of Axios configured with a base URL and specific headers. To avoid CORS issues.
export default axios.create({
    // Set the base URL for all requests made with this Axios instance.
    baseURL: 'https://9c96-103-106-239-104.ap.ngrok.io',

    // Define specific headers that will be included in all requests made with this Axios instance.
    headers: { "ngrok-skip-browser-warning": "true" }
});