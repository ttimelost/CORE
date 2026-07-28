import React, { createContext, useState } from 'react';

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null)

    function logar(email, senha) {
        if (email === 'juca@gmail.br' && senha === '1234565') {
            setUsuario({nome : 'juca', emial : email})
        }else{
            alert('Email ou senha invalidos');
        }
    }
}

function deslogar() {
    setUsuario(null)
}

return(
    <AuthContext.Provider>
        {children}
    </AuthContext.Provider>
)