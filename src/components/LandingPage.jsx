import React from "react";
import "./LandingPage.css";

const LandingPage = ({ onGetStarted }) => {
  return (
    <>
      <main className="landing-page">
        <div className="content">
          <div className="landing-content">
            <h1 className="content-title">Seu <br /><strong className="title-emfase">Mercadão</strong></h1>
            <p className="content-subtitle">
              Sua lista de compras <strong className="subtitle-emfase ">simples</strong>, rápida e <strong className="subtitle-emfase ">sem complicação</strong>.
            </p>
            <p className="content-description">
              O Mercadão é a ferramenta direta ao ponto para organizar suas
              compras. <br /><br />Crie e gerencie listas em segundos, marque o que já
              colocou no carrinho e evite esquecimentos no mercado. Prático,
              leve e feito para agilizar sua rotina.
            </p>
            <button className="get-started-button" onClick={onGetStarted}>
              Montar minha lista
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
