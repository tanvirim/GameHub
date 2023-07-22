import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { genres, errors, loading } = useGenres();

  if (loading) {
    return <div>Loading...</div>; // Handle loading state
  }

  if (errors) {
    return <div>Error: {errors}</div>; // Handle error state
  }

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}> {genre.name}</li> // Added key prop and removed semicolon
      ))}
    </ul>
  );
};

export default GenresList;
