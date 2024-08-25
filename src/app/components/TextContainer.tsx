import React from 'react'

interface TextContainerProps {
    title: string;
    conteudo: string;
    btTitle:string;
}

const TextContainer:React.FC<TextContainerProps> = ({title, conteudo, btTitle}) =>{

    return(
    <div className="p-2 pb-0 mb-3 max-w-[600px] bg-black bg-opacity-70 hover:bg-gray-900 hover:bg-opacity-70 border-b-2 border-red-500">
      <p className="text-white text-xl font-bold pb-2">{title}</p>
      <p className="text-white text-sm pb-4">{conteudo}</p>
      <div className="flex justify-end">
      <button className="bg-red-500 pl-10 pr-10 pt-2 pb-2 mb-2 hover:bg-red-200 font-bold text-sm active:bg-white">{btTitle}</button>
      </div>
      </div>
    )
}

export default TextContainer