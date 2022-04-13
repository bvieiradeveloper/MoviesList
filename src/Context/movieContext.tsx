import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { MovieContextType } from "../interfaces/Movies";

const contextDefaultValues: MovieContextType = {
  selectedGenreId: 1,
  setSelectedGenreId: () => {}
};

 const MovieContext = createContext<MovieContextType>(contextDefaultValues);

const MovieProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  return <MovieContext.Provider value={{ selectedGenreId, setSelectedGenreId }}>{children}</MovieContext.Provider>;
};

export default MovieProvider;
export const useMovies = () => useContext(MovieContext);