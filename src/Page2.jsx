import React from "react";

const Page2 = () => {
  // Création des éléments animés
  const hearts = Array(10)
    .fill()
    .map((_, i) => (
      <div
        key={`heart-${i}`}
        className="heart"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${8 + Math.random() * 7}s`,
          opacity: 0,
        }}
      />
    ));

  const balloons = Array(8)
    .fill()
    .map((_, i) => {
      const colors = ["#ff85a2", "#ffb347", "#7fb800", "#00cc99", "#6699cc"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      return (
        <div
          key={`balloon-${i}`}
          className="balloon"
          style={{
            left: `${Math.random() * 100}%`,
            backgroundColor: color,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
            opacity: 0,
          }}
        />
      );
    });

  const confettis = Array(30)
    .fill()
    .map((_, i) => {
      const colors = [
        "#ff85a2",
        "#ffb347",
        "#7fb800",
        "#00cc99",
        "#6699cc",
        "#ffffff",
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = `${5 + Math.random() * 5}px`;
      return (
        <div
          key={`confetti-${i}`}
          className="confetti"
          style={{
            left: `${Math.random() * 100}%`,
            backgroundColor: color,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 7}s`,
            width: size,
            height: size,
            borderRadius: Math.random() > 0.5 ? "50%" : "0",
          }}
        />
      );
    });

  return (
    <div className="app">
      {hearts}
      {balloons}
      {confettis}

      <div className="decoration"></div>
      <div className="decoration2"></div>
      <div className="decoration3"></div>

      <div className="card">
        <h1 className="title">Bonne Fête Maman Rachelle</h1>

        <div className="message">
          <p>Maman, Rachelle</p>
          <p>
            Aujourd’hui, c’est ta journée, mais pour moi, chaque jour est une
            fête des mères quand je pense à toi.
          </p>
          <p>
            Depuis que je suis petit, tu as toujours été là, même quand tout
            semblait difficile. Ton sourire, ta force silencieuse et ta
            tendresse m’ont toujours guidé.
          </p>
          <p>
            Tu es bien plus qu’une maman. Car tu es celle qui m’a appris à me
            relever, à aimer, à être vrai.
          </p>
          <p>
            Je te dois tant… et pourtant, aucun mot ne pourra vraiment exprimer
            à quel point je t’aime et je t’admire.
          </p>
          <p>
            Merci pour chaque sacrifice, chaque conseil, chaque regard rempli
            d’amour. Merci d’être toi, tout simplement.
          </p>
          <p>Je te souhaite une journée aussi douce et belle que ton cœur.</p>
          <p className="signature">AMIAN JUNIOR :)</p>
        </div>
      </div>
    </div>
  );
};

export default Page2;
