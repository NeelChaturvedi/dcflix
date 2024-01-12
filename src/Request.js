const key ='d4a85b3e8c70d6952a7bb93a8ff93524'

const requests ={
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
    requestAction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,
    requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`,
    requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
};

export default requests