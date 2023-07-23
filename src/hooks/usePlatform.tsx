import UseData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => UseData<Platform>("platforms/lists/parents");

export default usePlatform;
