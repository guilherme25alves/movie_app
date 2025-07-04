export const TMBD_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers : {
        accept: "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

type QueryType = {
    query : string
}

export const fetchMovies = async ({query} : QueryType) => {
    const endpoint = query 
        ? `${TMBD_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${TMBD_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`

    const response = await fetch(endpoint, {
        method: "GET",
        headers: TMBD_CONFIG.headers,
    });

    if(!response.ok) {
        // @ts-ignore
        throw new Error("Failed to fetch movies!", response.statusText);
    }

    const data = await response.json()

    return data
}

export const fetchMovieDetails = async (movieId: string) : Promise<MovieDetails> => {
    try {
        const endpoint = `${TMBD_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMBD_CONFIG.API_KEY}`;
        const response = await fetch(endpoint, {
            method: "GET",
            headers: TMBD_CONFIG.headers
        });

        if (!response.ok) {
            // @ts-ignore
            throw new Error("Failed to fetch movie details!", response.statusText);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
        throw error;
    }

}


// MODELO BASE NO SITE

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer <Bearer-Token>'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));