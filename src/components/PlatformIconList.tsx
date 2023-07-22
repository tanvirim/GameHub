import { HStack, Icon } from "@chakra-ui/react";
import { BsGlobe } from "react-icons/Bs";
import {
  FaAndroid,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/Fa";
import { RiMacbookLine } from "react-icons/Ri";
import { SiNintendo } from "react-icons/Si";
import { Game } from "../hooks/useGames";
interface Props {
  game: Game;
}
const PlatformIconList = ({ game }: Props) => {
  const icons = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: RiMacbookLine,
    linux: FaLinux,
    android: FaAndroid,
    web: BsGlobe,
  };
  return (
    <HStack>
      {" "}
      {game.parent_platforms.map(({ platform }) => (
        <Icon color="gray.500" key={platform.id} as={icons[platform.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
