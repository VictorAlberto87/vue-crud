import Axios from 'axios';

const config = {
    URL_API: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type' : 'application/json; charset=UTF-8'
    }
}

const services = Axios.create({
    baseURL: config.URL_API,
    headers: config.headers
})

export default services;