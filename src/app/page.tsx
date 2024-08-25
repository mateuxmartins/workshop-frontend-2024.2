import TextContainer from "./components/TextContainer";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <main className="h-screen bg-[url(http://localhost:3000/1.png)] bg-no-repeat bg-customPos">
      
      <Menu />

      <div className="p-8 pl-10 pb-0">
      <p className="text-lg text-white font-bold pb-3">NOTÍCIAS</p>
      <TextContainer title={'SEJA BEM VINDO'} conteudo={'Você pode encontrar os agentes do jogo clicando em "agentes" no menu superior.'} btTitle="VISITAR" />
      <br/>
      <TextContainer title={'APRENDA A JOGAR'} conteudo={'Siga os nossos tutoriais e aprenda as regras básicas do jogo.'} btTitle="APRENDER JÁ!"/>
      <br/>
      <TextContainer title={'NOVAS SKINS'} conteudo={'As novas skins estão disponíveis em nossa loja'} btTitle="CONFIRA"/>
      </div>
    </main>
  );
}
