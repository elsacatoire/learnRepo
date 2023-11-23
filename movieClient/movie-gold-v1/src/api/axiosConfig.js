// Import the Axios library, which allows making HTTP requests from the browser or Node.js.
import axios from 'axios';

// Export an instance of Axios configured with a base URL and specific headers. To avoid CORS
export default axios.create({
    // Set the base URL for all requests made with this Axios instance.
    baseURL: 'http://localhost:8080',

    // Define specific headers that will be included in all requests made with this Axios instance.
    headers: { "ngrok-skip-browser-warning": "true" }
});