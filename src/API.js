import axios from 'axios';
const LOGIN_USER_KEY = 'WD_FORUM_LOGIN_USER_KEY';

var baseURL;
if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION') {
    baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
    baseURL = 'https://jbackend1.herokuapp.com/';
}


const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
 * Add requireToken: true in request config, for API that required Authorization token
 */
api.interceptors.request.use(
    config => {
        if (config.requireToken && localStorage.getItem(LOGIN_USER_KEY)) {
            config.headers.common['Authorization'] = JSON.parse(localStorage.getItem(LOGIN_USER_KEY)).token;
        }

        return config;
    },
    err => {
        console.error(err);
    }
);

export default class API {
    getPlaces = async (search, category, id) => {
        let url = '/places/';
        let query = new URLSearchParams();
        if (search) {
            query.append('search', search);
        }
        if (category) {
            query.append('category', category);
        }
        if (id) {
            query.append('id', id);
        }

        if (query.toString() !== '') {
            url += '?' + query.toString();
        }

        const places = await api
            .get(url)
            .then(response => {
                return response.data;
            })
            .catch((error) => {
                throw new Error(error);
            });
        return places;
    };
    getCategories = async (id) => {
        let url1 ;

        let query1 = new URLSearchParams();
        if (id) {
       url1=`/categories/?id=${id}`
            
        }
        else{
            url1='/categories/'
        }

        const categories = await api
            .get(url1)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return categories;
    };
}
