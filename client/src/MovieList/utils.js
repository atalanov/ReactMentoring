import { API_URL } from './constants';

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }
    return response.json();
}

export default {
    get: (filter) => {
        const url = new URL(API_URL);
        Object.keys(filter).forEach(key => url.searchParams.append(key, filter[key]));
        return fetch(url).then(handleResponse);
    },
};
