import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropedImageUrl from "../services/image-url";

const GenresList = () => {
  const { data, errors, loading } = useGenres();

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while data is being fetched
  }

  if (errors) {
    return <div>Error: {errors}</div>; // Show error message if there is an error
  }

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image
              src={getCropedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text fontSize="lg">{genre.name} </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
