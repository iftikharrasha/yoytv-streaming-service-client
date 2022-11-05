import axios from 'axios';
import useSWR from "swr";

const useGamesData = () => {
    const fetcher = async (url) =>
    await axios.get(url).then((res) => res.data.message);

    // const { data: allGames } = useSWR(
    //     `${process.env.REACT_APP_API_LINK_GAMES}/games?pub_key=games123456pub&active=all`,
    //     fetcher
    // );

    const { data: activeGames } = useSWR(
        `${process.env.REACT_APP_API_LINK_GAMES}/games?pub_key=games123456pub&active=active`,
        fetcher
    );
    
    const { data: gamesCategories } = useSWR(
        `${process.env.REACT_APP_API_LINK_GAMES}/categories?pub_key=games123456pub`,
        fetcher
    );

    return {
        // allGames,
        activeGames,
        gamesCategories,
    };
};

export default useGamesData;