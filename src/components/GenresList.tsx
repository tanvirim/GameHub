import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCropedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenresList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, errors, loading } = useGenres();

  if (loading) {
    return <Spinner></Spinner>; // Show loading indicator while data is being fetched
  }

  if (errors) {
    return <div>Error: {errors}</div>; // Show error message if there is an error
  }

  return (
    <>
      <Heading fontSize="2xl" paddingLeft={7}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack marginBottom={2}>
              <Image
                objectFit="cover"
                src={getCropedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}{" "}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
