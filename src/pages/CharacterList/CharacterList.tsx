import { FC } from "react";
import { useCharacters } from "../../hooks";

const CharacterList: FC = () => {
    const { error, loading, data } = useCharacters();

    console.log(data);

    return <div></div>;
};

export default CharacterList;
