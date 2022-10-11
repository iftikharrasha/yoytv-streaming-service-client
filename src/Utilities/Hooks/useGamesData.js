import axios from 'axios';
import { useState, useEffect } from 'react';

const useGamesData = () => {
    const [allGames, setAllGames] = useState([]);
    const [activeGames, setActiveGames] = useState([]);

    const fetchGames= async (param) =>  {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_LINK_GAMES}/api/games?active=${param}`);

            if(response.data.success === true) {
                if(param === 'active'){
                    setActiveGames(response.data.message)
                }else{
                    setAllGames(response.data.message);
                }
            }else{
                console.log('SERVER ERROR');
            }

            return response.data.message
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        fetchGames('all');
        fetchGames('active');
    }, []);

    return {
        allGames,
        activeGames,
    };
};

export default useGamesData;