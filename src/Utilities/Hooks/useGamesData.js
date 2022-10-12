import axios from 'axios';
import { useState, useEffect } from 'react';

const useGamesData = () => {
    const [allGames, setAllGames] = useState([]);
    const [activeGames, setActiveGames] = useState([]);
    const [loading, setIsLoading] = useState(true);

    const fetchGames= async (param) =>  {
        setIsLoading(true)
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_LINK_GAMES}/api/games?active=${param}`);

            if(response.data.success === true) {
                if(param === 'active'){
                    setActiveGames(response.data.message)
                    setIsLoading(false);
                }else{
                    setAllGames(response.data.message);
                    setIsLoading(false);
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
        loading,
        allGames,
        activeGames,
    };
};

export default useGamesData;