import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODgyNjA2ZTBjZmJiYWQxNTQ3OGIwMjA1OWRhMmExNSIsInN1YiI6IjY0NTI4NTUyMDkxZTYyMDEwMjc3N2JmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HFyQj1clPDRJFj69ZY39V7TaOF5j8HUUudhcm4HSiEs"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
