import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const login = (data) => {
        setUser(data);
    }

    const logout = (e) => {
        setUser(null);
    }
  return (
    <UserContext.Provider value={{user, login, logout}}>
        {children}
    </UserContext.Provider>
  )
}

// export const useAuth = () => useContext(UserContext);
