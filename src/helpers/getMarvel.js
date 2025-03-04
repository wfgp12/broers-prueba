import md5 from "blueimp-md5";

const PUBLIC_KEY = "528a1be992397526355fa561deae603d";
const PRIVATE_KEY = "155db94768f8aa33f6aa08832578939950d092c0";

const generateHash = () => {
  const ts = new Date().getTime();
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

  return hash
};

export const getMarvelCharacters = async ( page = 2, pageSize = 10) => {
  const offset = (page - 1) * pageSize;
  const url = "https://gateway.marvel.com/v1/public";

  try {
    const response = await fetch(`${url}/characters?apikey=${PUBLIC_KEY}&hash=${generateHash()}&limit=${pageSize}&offset=${offset}`);
    const data = await response.json();

    return { characters: data.data.results, total: data.data.total };
  } catch (error) {
    console.error("Error al obtener personajes de Marvel:", error);
    return {characters: [], total: 0};
  }
};