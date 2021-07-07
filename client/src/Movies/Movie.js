import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useRouteMatch } from "react-router-dom";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";

export default function Movie({ movies }) {
	console.log(movies);
	const [movie, setMovie] = useState();

	const { id } = useParams();
	// const movieId = movies.find((movie) => movie.id == id);
	// const { url, path } = useRouteMatch();
	// console.log(url);
	console.log(id);
	// const id = params.id;
	// Change ^^^ that line and use a hook to obtain the :id parameter from the URL

	useEffect(() => {
		axios
			.get(`http://localhost:5000/api/movies/${id}`) // Study this endpoint with Postman
			.then((response) => {
				// Study this response with a breakpoint or log statements
				// and set the response data as the 'movie' slice of state
				console.log(response.data);
				setMovie(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
		// This effect should run every time time
		// the `id` changes... How could we do this?
	}, [id]);

	// Uncomment this only when you have moved on to the stretch goals
	// const saveMovie = evt => { }

	if (!movie) {
		return <div>Loading movie information...</div>;
	}

	return (
		<div className="save-wrapper">
			<MovieCard movie={movie} />
		</div>
	);
}
