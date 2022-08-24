import { useState, useEffect } from "react";
import landingShows from '../../Data/home_first_section.json';
import useSWR from "swr";
import axios from "axios";

const useUserApi = () => {
    const [newRelease, setNewRelease] = useState(landingShows[0].data.data[0].data);

    // const tokenData = {
    //     id: 14,
    //     token: "2y10QSc0ldaANgbMPIkdxhX0eKCM0AYi3sklm1kdzMflqhTPIz0elEem",
    //     sub_profile_id: 14,
    //     country_code: "IN"
    // }

    // homefirstsectionfeatured api
    // const getHomeFirstShows = async () => {
    //     try {
    //         const response = await axios.post(`${process.env.REACT_APP_API_LINK}/userApi/home_first_section`, tokenData);

    //         if(response.success){
    //             setFeatured(response);
    //         }else{
    //             console.log('Api Error!');
    //         }
    //         return response.data
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(() => {
    //     getHomeFirstShows();
    // }, [])

    // homesettings api
    const fetcher = async (url) =>
    await axios
        .get(url)
        .then((res) => res.data.data);

    const { data: landingData } = useSWR(
        `${process.env.REACT_APP_API_LINK}/userApi/get_settings_json`,
        fetcher
    );

    return {
        newRelease,
        landingData,
    };
};

export default useUserApi;