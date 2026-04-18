import Header from "./components/Header.jsx"
import CardNews from "./components/CardNews.jsx"

import './styles/App.css'
import './styles/headerStyle.css'

import { SlEnergy } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";

function App(){
  const imgUrl1 = "../src/assets/img1.jpeg";
  const category1 = "Tecnologia";
  const title1 = "Inteligência artificial revoluciona diagnósticos médicos em hospitais brasileiros";
  const descripition1 = "Tecnologia já está sendo utilizada em mais de 50 hospitais do país, reduzindo em 40% o     tempo de diagnóstico de doenças complexas.";
  const author1 = "José Roberto";
  const duration1 = "4";

  const imgUrl2 = "../src/assets/img2.jpeg";
  const category2 = "Esporte"; //Parei Aqui!
  const title2 = "Inteligência artificial revoluciona diagnósticos médicos em hospitais brasileiros";
  const descripition2 = "Tecnologia já está sendo utilizada em mais de 50 hospitais do país, reduzindo em 40% o     tempo de diagnóstico de doenças complexas.";
  const author2 = "José Roberto";
  const duration2 = "4";

  const imgUrl3 = "../src/assets/img3.jpeg";
  const category3 = "Tecnologia";
  const title3 = "Inteligência artificial revoluciona diagnósticos médicos em hospitais brasileiros";
  const descripition3 = "Tecnologia já está sendo utilizada em mais de 50 hospitais do país, reduzindo em 40% o     tempo de diagnóstico de doenças complexas.";
  const author3 = "José Roberto";
  const duration3 = "4";

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
          <CardNews imgUrl={imgUrl1} category={category1}/>
        </div>
      </main>
    </div>
  )
}

export default App;