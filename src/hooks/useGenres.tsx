import UseData from "./UseData";
export interface Genres {
  name: string;
  id: number;
}

const useGenres = () => UseData<Genres>("/genres");

export default useGenres;
