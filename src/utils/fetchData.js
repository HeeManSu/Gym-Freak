//This exercise option is going to authorise you to make API calls.Since, we are pakking API KEY.
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'

    }
}

export const youtubeOptions = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPDID_API_KEY2,
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

//This will be fetching the data from the API.
export const fetchData = async (url, options) => {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    }