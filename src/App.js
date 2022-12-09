import React from "react";
import './App.css';
import FlatList from "flatlist-react";
import { FiHeart, FiCheck } from "react-icons/fi";
import data from '../src/lista/lista';

export default function App() {

  const addCart = (id) => {
    const texto = document.querySelector('#btnad' + id);
    const icon = document.querySelector('#iconBtn' + id);
    const btn = document.querySelector('#btnProduto' + id);
    icon.style.display = 'flex';
    texto.innerHTML = 'ADICIONADO';
    btn.style.backgroundColor = '#A3F9B9';
    setTimeout(() => {
      texto.innerHTML = 'ADICIONAR';
      icon.style.display = 'none';
      btn.style.backgroundColor = '#40B25C';
    }, 1250);
  }

  const favList = (id) => {
    const texto = document.querySelector('#btnad' + id);
    const divLike = document.querySelector('#divLike' + id);
    const Like = document.querySelector('#likeIcon' + id);
    divLike.style.backgroundColor = '#DA4B4F';
    Like.style.color = 'white';
    texto.innerHTML = 'ADICIONADO';
    texto.style.color = 'white';
    setTimeout(() => {
      texto.innerHTML = 'ADICIONAR';
      Like.style.color = 'black';
      texto.style.color = 'black';
      divLike.style.backgroundColor = '#E9EBEE';
    }, 1250);
  }

  const renderer = (data) => {
    return (
      <div className="Card" key={data.id}>
        <div style={{ position: 'relative' }}>
          <div id={"divLike" + data.id} className="cardLike" onClick={() => favList(data.id)}>
            <FiHeart id={"likeIcon" + data.id} className="btnLike" />
          </div>
          <img src={data.img} className="imgCard" />
        </div>
        <div className="title">
          <p>{data.nome.toUpperCase()}</p>
        </div>
        <div className="infosProd">
          <h6>R$ {data.preco.toFixed(2)}</h6>
          <p className="precoPromo">R$ {data.precopromo.toFixed(2)}</p>
          <p className="descProd">em até <span className="parcelas">{data.parcelas}</span> sem juros</p>
        </div>
        <button className="btnProd" id={'btnProduto' + data.id} onClick={() => addCart(data.id)}>
          <FiCheck id={"iconBtn" + data.id} size={20} className="iconCheck" />
          <h4 id={"btnad" + data.id}>ADICIONAR </h4>
        </button>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="contProd">
        <FlatList
          list={data}
          renderItem={renderer}
        />
      </div>
    </div>
  )
}