import React, { createContext } from 'react';
import useAuthentication from '../../Hooks/useAuthentication';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const searchResultContext = useAuthentication();
    return (
        <AuthContext.Provider value={searchResultContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;