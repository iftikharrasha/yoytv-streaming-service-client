import axios from 'axios';

const useTvData = () => {
    const fetchChannels = async () =>  {
        const data = {
            id: 14,
            sub_profile_id: 14,
            token: "2y10QSc0ldaANgbMPIkdxhX0eKCM0AYi3sklm1kdzMflqhTPIz0elEem"
        }
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_LINK}/userApi/tv_guide`, data);
            console.log(response)

            if(response.data.status === 200) {
                new Promise((res) => setTimeout(() => res(response.data.channels), 400));
            }else{
            }

            return response.data
        } catch (error) {
            console.log(error);
        }
    }

    return (
        fetchChannels
    );
};

export default useTvData;