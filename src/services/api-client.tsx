import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e757b1264a8b494b81d1a45a9bb17544",
  },
});
