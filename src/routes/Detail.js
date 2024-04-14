import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovies(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    },)
    return (
        <div>
            {loading ?
                <h1>Loading....</h1> :
                <div>
                    <img src={movies.medium_cover_image} alt={movies.title} />
                    <h2>
                        {movies.title}
                    </h2>
                    <p>
                        {movies.description_full ? movies.description_full : "undifined"}
                    </p>
                    <ul>
                        {movies.genres.map(g => <li key={g}>{g}</li>)}
                    </ul>
                    <hr />
                </div>
            }
        </div>
    )
}

export default Detail;