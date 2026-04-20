import Header from "./Header.jsx"
import CardNews from "./components/CardNews.jsx"

import './styles/App.css'
import './styles/headerStyle.css'

import { SlEnergy } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";

function App(){
  const imgUrl1 = "../src/assets/img1.jpeg";
  const category1 = "TECNOLOGIA";
  const title1 = "Inteligência artificial revoluciona diagnósticos médicos em hospitais brasileiros";
  const descripition1 = "Tecnologia já está sendo utilizada em mais de 50 hospitais do país, reduzindo em 40% o     tempo de diagnóstico de doenças complexas.";
  const author1 = "José Roberto";
  const duration1 = "4";

  const imgUrl2 = "../src/assets/img2.jpeg";
  const category2 = "ESPORTE";
  const title2 = "Seleção Brasileira convoca jogadores para eliminatórias da Copa";
  const descripition2 = "Técnico anuncia lista com 23 atletas para os próximos jogos decisivos. Estrelas da Europa lideram convocação histórica.";
  const author2 = "Reniselma Santos";
  const duration2 = "3";

  const imgUrl3 = "../src/assets/img3.jpeg";
  const category3 = "MUNDO";
  const title3 = "Acordo comercial entre Brasil e União Europeia entra em nova fase de negociações";
  const descripition3 = "Representantes de ambos os lados se reúnem em Bruxelas para definir termos finais do maior acordo comercial da história.";
  const author3 = "Miguel Santos";
  const duration3 = "6";

  return(
    <div>
      <Header />
      <main>
        <div id="topNews">
          <span><SlEnergy /> Urgente</span>
          <p>Últimas atualizações: Governo anuncia novo pacote de investimentos em infraestrutura para 2028</p>
        </div>
        <div id="mainNews">
          <div id="dataMainNews">
            <span>Brasil</span>
            <h1>Governo anuncia novo pacote de investimentos em infraestrutura para 2028</h1>
            <p>
              Plano prevê R$ 280 bilhões em obras de rodovias, ferrovias e portos nos próximos quatro anos, com expectativa de gerar 2 milhões de empregos diretos e indiretos em todo o país.
            </p>
            <nav>
              <ul>
                <li><IoPersonOutline /> Miguel Santos</li>
                <li>15 de Maio de 2026</li>
                <li><CiClock2 /> 5 Minutos de Leitura</li>
              </ul>
            </nav>
          </div>
        </div>
        <div id="lastNews">
          <div id="titleLastNews">
            <hr />
            <h2>Últimas Notícias</h2>
          </div>
          <div id="cards">
            <CardNews imgUrl={imgUrl1} category={category1} title={title1} descripition={descripition1} author={author1} duration={duration1} />
            
            <CardNews imgUrl={imgUrl2} category={category2} title={title2} descripition={descripition2} author={author2} duration={duration2} />

            <CardNews imgUrl={imgUrl3} category={category3} title={title3} descripition={descripition3} author={author3} duration={duration3} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App;