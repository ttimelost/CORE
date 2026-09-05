import React, { createContext, useContext, useState} from "react";

const EducacaoContext = createContext();

const modulos = {
    modulo1: {
        id : 1,
        titulo: "Modulo 1",
        descricao: "Descrição do módulo 1",
    },
    modulo2: {
        id : 2,
        titulo: "Modulo 2",
        descricao: "Descrição do módulo 2",
    },
    modulo3: {
        id : 3,
        titulo: "Modulo 3",
        descricao: "Descrição do módulo 3",
    },
    modulo4: {
        id : 4,
        titulo: "Modulo 4",
        descricao: "Descrição do módulo 4",
    },
    modulo5: {
        id : 5,
        titulo: "Modulo 5",
        descricao: "Descrição do módulo 5",
    },
    modulo6: {
        id : 6,
        titulo: "Modulo 6",
        descricao: "Descrição do módulo 6",
    },
};

export function EducacaoProvider({ children }) {
    const [modulosEducacao, setModulosEducacao] = useState(modulos);

    return (
        <EducacaoContext.Provider value={{
            modulosEducacao,
        }}>
            {children}
        </EducacaoContext.Provider>
    );
}

export function useEducacao() {
    return useContext(EducacaoContext);
}