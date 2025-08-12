import { useAuth } from "../context/auth";

function Header(){
    const {user, login, logout} = useAuth()
    return(
        <header>
            {user ? (
                <>
                    <span>Olá, {user.name}</span>
                    <button onClick={logout}>Sair!</button>
                </>
            ) : (
                <button onClick={() => login ("Agatha")}>Entrar</button>)}
        </header>
    )
}