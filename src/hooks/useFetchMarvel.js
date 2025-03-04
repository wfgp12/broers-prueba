import { useEffect, useState } from "react";
import { getMarvelCharacters } from "../helpers";

export const useFetchMarvel = (page = 1, pageSize = 10) => {
  const [characters, setCharacters] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);

      const { characters, total } = await getMarvelCharacters(page,pageSize);

      if (total > 0) {
        setCharacters(characters);
        setTotal(total);
      } else {
        setError("No se encontraron personajes.");
      }

      setLoading(false);
    };

    const debounce = setTimeout(fetchCharacters, 500);
    return () => clearTimeout(debounce);
  }, [page, pageSize]);

  return { characters, loading, error, total };
};
