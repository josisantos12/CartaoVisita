import "./App.scss";

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <img src="./logo.png"  className="logo" />
        <a href="#contato" className="contato">Fale Conosco</a>
      </header>

      <section className="hero">
          <button className="btn">Sobre nós</button>
      </section>

      <section className="sobre">
        <div className="img-ab"  />
        <div className="sobre-texto">
          <p>
            Fundo: Mantenha a colmeia (hexágonos) como elemento principal. Ela lembra estratégia,
            quebra-cabeças e organização — ótimo para jogos. <br />
            Tema de Cores: Amarelo (mel), laranja e tons escuros para contraste (preto ou roxo escuro). <br />
            Estilo: Lúdico, divertido, mas moderno.
          </p>
        </div>
      </section>

      <section className="formulario" id="contato">
        <form>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Envie sua mensagem" />
          <button type="submit">Send</button>
        </form>
        <div className="img-form"  />
      </section>

      <footer className="footer">
        <p>© Honey Pup Studios</p>
        <div className="social">
          <a href="#"><i className="icon linkedin" /></a>
          <a href="#"><i className="icon insta" /></a>
        </div>
      </footer>
    </div>
  );
}