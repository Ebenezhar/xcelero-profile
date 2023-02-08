import { createContext, useState } from "react";

let UserContext = createContext();

export const UserProvider = ({ children }) => {

    let [profile, setProfile] = useState()
    return (
        <UserContext.Provider value={{ profile, setProfile }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;