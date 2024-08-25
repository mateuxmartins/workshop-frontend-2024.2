import { useState, useEffect } from "react";
import axios from "axios";
import agentes from "../agentes/page";

const AgentesList = () =>{

    interface tipoRole{
        uuid:string;
        displayName:string;
    }

    interface tipoHabilidades{
        slot:string;
        displayName:string;
        description:string;
        displayIcon:string;
    }

    interface todosOsAgentes{
        uuid:string;
        displayName:string;
        description:string;
        displayIcon:string;
        abilities:tipoHabilidades[];
        role:tipoRole;
    }

    interface tipoDeDados{
        data:todosOsAgentes[];
    }

    const [agentesDados, setAgenteDados] = useState<todosOsAgentes[]>([])

    useEffect( () => {
        axios.get<tipoDeDados>('https://valorant-api.com/v1/agents')
        .then(response => {
            setAgenteDados(response.data.data)
        })
        .catch(erro =>{
            console.log(erro)
        })
    }, [])



    function busca(){

        let s = document.getElementById('search') as HTMLInputElement
        let valor = s.value
        valor = valor.charAt(0).toUpperCase() + valor.slice(1);
        let tamanho = valor.length
        
        if(s){//buscar 
            try{
            agentesDados.forEach( (agente, index) => {
                
                let currentName = agente.displayName
                let nameSized = currentName.substring(0, tamanho)
                let theContainer = document.getElementById(agente.uuid) as HTMLDivElement
                

                if(nameSized == valor){
                    theContainer.style.cssText = "display:block"
                }else{
                    if(theContainer){
                        theContainer.style.cssText = "display:none"
                    }
                    
                }

                
            }) }catch(error){
            }
        }

    }
    //9 erro a api não fornece as informacoe no role, apenas null
    //o personagem sova estava duplicado e na duplicacao faltava informacoes da variavel role
    //index 0 ate 24

    return(
        <div>
            <div className="flex w-full justify-center">
                <input id="search" type="text" placeholder="Digite o nome do agente..." className="w-2/3 p-3 rounded-xl m-5" onKeyUp={busca}/>
            </div>
            <div className="flex flex-wrap">
                {
                    agentesDados.length > 0 ? (
                        agentesDados.map( (item, index) => (
                            index !== 9 ? (
                            <div id={item.uuid} key={item.uuid}>
                            <div className="max-w-[400px] bg-white bg-opacity-80 rounded-lg p-5 pt-4 m-5">
                            <div className="flex justify-center font-bold text-xl pb-2 border-0 border-b-2 border-red-500 mb-2">{item.displayName}</div>
                            <div className="flex gap-3">
                            
                            <div className="w-1/3 h-1/3">
                            <img className="bg-purple-500 rounded-lg" src={item.displayIcon}/>
                            <p className="flex text-sm justify-center">
                                Role: <b> {agentesDados[index].role.displayName}</b>
                            </p>
                            </div>
                            <div className="text-justify w-2/3">{item.description}</div>
                            </div>
                            <br/>
                            
                            <div className="flex justify-center italic pb-2">Habilidades:</div>
                            <div className="flex flex-wrap gap-3 justify-center">
                                

                                { agentesDados[index].abilities.map( (habilidade) => (
                                    <div key={habilidade.slot} className="flex font-bold text-sm text-white items-center gap-3 bg-green-500 p-2 rounded-lg w-[150px]">
                                    <img src={habilidade.displayIcon} width={30} />
                                    <div>{habilidade.displayName}</div>
                                    </div>  
                                ))}

                            </div>
                        </div>
                        </div>
                        
                            ) : (
                            ''
                            )
                        )) 
                    ) : (
                        <div className="flex justify-center p-10 text-white text-xl">Carregando...</div>
                    )
                    
                }
            </div>
        </div>
    )
}

export default AgentesList