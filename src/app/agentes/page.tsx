"use client"
import Menu from "../components/Menu"
import AgentesList from "../components/AgentesList"

const agentes = () =>{

    
    return(
        <main className="h-screen bg-[url(http://localhost:3000/2.png)] bg-no-repeat bg-customPos">
        
        <Menu />

        <div className="text-white text-xl p-10 pb-2">AGENTS</div>

        <AgentesList />

        </main>
    )
}

export default agentes