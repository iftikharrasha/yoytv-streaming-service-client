import { useState, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";

const useLandingApi = () => {
    const [newRelease, setNewRelease] = useState([]);
    const [categories, setCategories] = useState([]);

    const tokenData = {
        id: 14,
        token: "2y10QSc0ldaANgbMPIkdxhX0eKCM0AYi3sklm1kdzMflqhTPIz0elEem",
        sub_profile_id: 14,
    }

    const getHomeFirstShows = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_LINK}/userApi/home_first_section`, tokenData);

            if(response.data.success){
                setNewRelease(response.data.data[0].data);
            }else{
                console.log('Api Error!');
            }
            return response.data
        } catch (error) {
            console.log(error);
        }
    }

    const getHomeFirstShowsAfterLog = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_LINK}/userApi/home_second_section`, tokenData);

            if(response.data.success){
                setCategories(response.data.data);
            }else{
                console.log('Api Error!');
            }
            return response.data
        } catch (error) {
            console.log(error);
        }
    }

    // homefirstsectionfeatured api
    useEffect(() => {
        getHomeFirstShows();
        getHomeFirstShowsAfterLog();
    }, [])

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
        categories,
        landingData,
    };
};

export default useLandingApi;