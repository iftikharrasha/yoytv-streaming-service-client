import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const useAuthentication = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const navigate = useNavigate();

    const handleLogin = async (data) => {
        const signedInUser = {
            isSignedIn: true,
            email: process.env.REACT_APP_USER,
            name: process.env.REACT_APP_USERNAME
        };
        setLoggedInUser(signedInUser);
        navigate('/');

        // try {
        //     const response = await axios.post(`${process.env.REACT_APP_API_LINK}/userApi/v4/login?id=&token=&language=en&email=${data.emailAddress}&password=${data.password}&timezone=America/Mexico_City&login_by=manual&device_type=web&device_token=123456`, data);
        //     return response.data
        // } catch (error) {
        //     console.log(error);
        // }
    }

    const handleRegistration = async (data) => {
        const signedInUser = {
            isSignedIn: true,
            email: process.env.REACT_APP_USER,
            name: process.env.REACT_APP_API_USERNAME
        };
        setLoggedInUser(signedInUser);
        navigate('/');

        // try {
        //     const response = await axios.post(`${process.env.REACT_APP_API_LINK}/userApi/v4/registration?id=&token=&language=en&email=${data.emailAddress}&password=${data.password}&timezone=America/Mexico_City&login_by=manual&device_type=web&device_token=123456`, data);
        //     return response.data
        // } catch (error) {
        //     console.log(error);
        // }
    }

    const handleLogOut = () => {
        setLoggedInUser(null);
        navigate('/');
    }

    return {
        loggedInUser,
        handleLogin,
        handleLogOut,
        handleRegistration
    };
};

export default useAuthentication;