import { HStack, Icon } from "@chakra-ui/react";
import { BsGlobe } from "react-icons/Bs";
import {
  FaAndroid,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/Fa";

import { IconType } from "react-icons";
import { AiFillApple } from "react-icons/Ai";
import { RiMacbookLine } from "react-icons/Ri";
import { SiNintendo } from "react-icons/Si";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const PlatformIconList = ({ game }: Props) => {
  const icons: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: RiMacbookLine,
    linux: FaLinux,
    android: FaAndroid,
    web: BsGlobe,
    ios: AiFillApple,
  };

  // Check if game.parent_platforms is defined before mapping over it
  return (
    <HStack>
      {game.parent_platforms?.map(({ platform }) => (
        <Icon
          color="gray.500"
          key={platform.id}
          as={icons[platform.slug as keyof typeof icons]}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
