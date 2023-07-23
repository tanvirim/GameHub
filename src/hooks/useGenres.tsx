import UseData from "./useData";
export interface Genres {
  name: string;
  id: number;
  image_background: string;
}

const useGenres = () => UseData<Genres>("/genres");

export default useGenres;
