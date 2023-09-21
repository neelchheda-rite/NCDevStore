<<<<<<< HEAD
import { createContext,useState } from "react";
=======
import { createContext } from "react";
>>>>>>> e28b4ee473f97c01b3b3afecd46504bb05bb4f46

export const Context  = createContext();

const AppContext = ({children}) => {
    return <Context.Provider>
        {children}
    </Context.Provider>
};

export default AppContext;