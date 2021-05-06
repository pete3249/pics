import axios from 'axios';

// going to create instance of axios client with a couple of defaulted properties
export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID vFYmQl8a5lo-fKnPZLq2KYlEyxRICD97tgYbgkUkBug'
    } 
})