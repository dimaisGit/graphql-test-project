import { gql, useQuery } from "@apollo/client";
import { FC } from "react";

const GET_CHARACTERS = gql`
    query {
        characters {
            results {
                id
                name
                image
            }
        }
    }
`;

const CharacterList: FC = () => {
    const { error, loading, data } = useQuery(GET_CHARACTERS);

    if (loading) return <div>loading...</div>;

    if (error) return <div>{error.message}</div>;

    return <div></div>;
};

export default CharacterList;
