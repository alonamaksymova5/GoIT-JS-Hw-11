

export function searchImages(query) {
    const URL = 'https://pixabay.com/api/';
    const API_KEY = '45244675-b8c376f5a42e781cf5d979658';
    const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    });

    return fetch(`${URL}?${searchParams}`).then(response => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
    });
}