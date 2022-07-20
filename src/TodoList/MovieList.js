import { nanoid } from "nanoid";
import React, { useState } from "react";
import toFixed from "./toFixed";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const MovieList = () => {
  const [animationParent] = useAutoAnimate();

  //VotedList
  const [movies, setMovies] = useState([
    {
      id: nanoid(),
      name: "Don't look up",
      imdb: 7.3,
    },
    {
      id: nanoid(),
      name: "Fast&Furious 9",
      imdb: 5.5,
    },
    {
      id: nanoid(),
      name: "The Northman",
      imdb: 7.7,
    },
    {
      id: nanoid(),
      name: "Spider-man: Now way Home",
      imdb: 8.7,
    },
  ]);

  const sortedmovies = movies.sort((a, b) => b.imdb - a.imdb);

  const updateImdb = (movie) => {
    const dupl = movies.find((e) => e.id === movie.id);
    if (dupl) {
      dupl.imdb += 0.1;
      setMovies([...movies.filter((m) => m.id !== movie.id), dupl]);
    }
  };
  return (
    <div>
      <div className="voteList">
        <ul className="flex flex-col gap-y-2 mt-4" ref={animationParent}>
          {sortedmovies.map((movie) => (
            <li
              key={movie.id}
              className="p-3 rounded bg-[#85a0ff] text-black  text-md flex justify-between"
            >
              <p className="flex gap-x-8">
                {movie.name}
                <span className="rounded-xl text-sm border-black  bg-yellow-300 py-2 px-1">
                  {movie.imdb.toLocaleString()}
                </span>
              </p>
              <button
                onClick={() => updateImdb(movie)}
                className="h-7 text-md px-4 rounded  bg-[#40bb2f] text-white"
              >
                Vote
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
