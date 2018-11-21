import axios from 'axios'

export default axios.create ({
    baseURL: 'https://api.unsplash.com/search/photos',
    headers: {
        Authorization: 
            'Client-ID a0069217b1f1a811dd1ac828d791607cd958c7b83903be292dec4fb5f2d555bf' 
    }
})