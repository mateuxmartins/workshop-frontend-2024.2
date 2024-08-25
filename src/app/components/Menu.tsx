import Image from "next/image";
import Link from "next/link";

const Menu = () =>{
    return(
        <ul className="flex text-xl bg-red-500">
        <li className="p-5 pb-5 bg-red-500 hover:bg-red-300">
        <Image src="Valorant_logo.svg" width={200} height={100} alt="Valorant"/></li>
        <li className="bg-red-500 p-5 pb-1 border-b-4 border-red-500 hover:border-white hover:font-bold hover:text-white active:bg-red-800">
        <Link href="/"> INÍCIO</Link></li>
        <li className="bg-red-500 p-5 pb-1 border-b-4 border-red-500 hover:border-white hover:font-bold hover:text-white active:bg-red-800">
        <Link href="/agentes"> AGENTES</Link></li>
      </ul>
    )
}

export default Menu