import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const useAuthentication = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
      const [error, setError] = useState('');
      const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (data) => {

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_LINK}/userApi/v4/login`, data);

            if(response.data.success){
                const signedInUser = {
                    isSignedIn: true,
                    user_id: response.data.data.user_id,
                    sub_profile_id: response.data.data.sub_profile_id,
                    name: response.data.data.name.split("@"),
                    email: response.data.data.email,
                    picture: response.data.data.picture,
                    mobile: response.data.data.mobile,
                    gender: response.data.data.gender,
                    is_verified: response.data.data.is_verified,
                    token: response.data.data.token,
                };
                setSuccess(response.data.message);
                setLoggedInUser(signedInUser);
                navigate('/profile/browse');
            }else{
                setError(response.data.error_messages);
            }

            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    const handleRegistration = async (data) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_LINK}/userApi/v4/register`, data);

            if(response.data.success){
                setSuccess(response.data.message);
            }else{
                setError(response.data.error_messages);
            }

            return response.data
        } catch (error) {
            console.log(error);
        }
    }

    const handleLogOut = () => {
        setError('');
        setSuccess('');
        setLoggedInUser(null);
        navigate('/');
    }

    return {
        error,
        success,
        loggedInUser,
        handleLogin,
        handleLogOut,
        handleRegistration,
        setSuccess,
        setError,
    };
};

export default useAuthentication;