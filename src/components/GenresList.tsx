import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { data, errors, loading } = useGenres();

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while data is being fetched
  }

  if (errors) {
    return <div>Error: {errors}</div>; // Show error message if there is an error
  }

  return (
    <div>
      {data.map((genre) => (
        <div key={genre.id}>{genre.name}</div>
      ))}
    </div>
  );
};

export default GenresList;
