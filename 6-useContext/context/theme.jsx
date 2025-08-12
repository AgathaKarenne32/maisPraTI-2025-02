import {createContext, useCallBack, useContext, useState, useMemo} from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({children}){
    const [theme, setTheme] = useState("light")

    //useCallBack a função do cache definindo entre rederizar
    const toggleTheme = useCallBack(() => {
        setTheme((t) => (t === "light"? "dark": "light"))

    }, [])

    const value = useMemo(() => ({theme, toggleTheme}),
    [theme, toggleTheme])

    return <ThemeContext value={value}>{children}
    </ThemeContext>
}

export function useTheme(){
     const ctx = useContext(AuthContext)
         if(!ctx) throw new Error("useAuth deve ser utilizado dentro do Provedor.")
             return ctx
}