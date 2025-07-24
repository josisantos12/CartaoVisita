// src/pages/Home.jsx
function Home() {
  const handleScroll = () => {
    const section = document.querySelector('.faleConosco');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">
      <header className="header">
        <img className='logo' src='/logo.png' alt="Logo" />
        <button onClick={handleScroll} className="contact">Fale Conosco</button>
      </header>

      <section className="bemVindo">
        <div className="dog">
          <img src="/dogsemfundo.png" alt="Dog" />
        </div>

        <div className="conteudo">
          <img className="logobranco" src="logobranco.png" alt="Logo branco" />
          <p className="slogan">O mundo dos jogos começa aqui</p>
        </div>
      </section>

      <section className="sobre-nos">
        <div className="conteudo">
          <h2>🎮 Sobre nós – Honey Pup 🐾</h2>
          <p className="intro">Na Honey Pup, criamos mais do que jogos: criamos mundos . Fundada com a paixão por contar histórias envolventes e oferecer experiências memoráveis, somos uma empresa de desenvolvimento de games que acredita no poder da criatividade, da diversão e da conexão.
Nosso nome é inspirado na lealdade e alegria de um filhote — e é exatamente isso que buscamos trazer em cada projeto: uma experiência acolhedora, vibrante e inesquecível. Seja explorando universos fantásticos ou enfrentando desafios surpreendentes, nossos jogos são feitos para emocionar.</p>
          <ul className="valores">
            <li><strong>🎮 Jogabilidade com alma:</strong> cada detalhe importa.</li>
            <li><strong>📚 Narrativas que marcam:</strong> criamos histórias que tocam.</li>
            <li><strong>👥 Comunidade em foco:</strong> ouvimos, aprendemos e evoluímos junto com quem joga.</li>
          </ul>
          <p>Estamos em constante crescimento, combinando talento, inovação e carinho em tudo que desenvolvemos. Para nós, cada jogo é uma aventura — e queremos que você venha nessa jornada conosco.</p>
        </div>
        <div className="bee">
          <img src="/bee.png" alt="Abelha" />
        </div>
      </section>

      <section className="faleConosco">
        <h2>Fale Conosco</h2>
        <form
          className="formulario"
          action="https://formsubmit.co/josiane15santos24@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_redirect" value="http://localhost:5173/sucesso" />
          <input type="text" name="nome" placeholder="Seu nome" required />
          <input type="email" name="email" placeholder="Seu e-mail" required />
          <textarea name="mensagem" placeholder="Sua mensagem" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>

      <footer className="rodape">
        <p>© 2025 HoneyPup Studios. Todos os direitos reservados.</p>
        <div className="icones">
          <a href="https://www.linkedin.com/company/honeypup-studios/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#f89c34ff"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001zm.02 4.9H2V21h3V8.4zm7-1.4c-1.64 0-3 .8-3 3.1V21h3v-7c0-.83.67-1.5 1.5-1.5S16 13.17 16 14v7h3v-7.5c0-3.31-2.69-6-6-6z" />
            </svg>
          </a>

          <a href="https://www.instagram.com/josimoota/" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#491b0eff"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.5.5.2.9.5 1.2.8.3.3.6.7.8 1.2.2.4.4 1 .5 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.5 2.2-.2.5-.5.9-.8 1.2-.3.3-.7.6-1.2.8-.4.2-1 .4-2.2.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.5a3.48 3.48 0 0 1-2-2c-.2-.4-.4-1-.5-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.5-2.2.2-.5.5-.9.8-1.2.3-.3.7-.6 1.2-.8.4-.2 1-.4 2.2-.5C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1c-1.4.1-2.3.3-3.2.6a5.61 5.61 0 0 0-2.1 1.4A5.61 5.61 0 0 0 .6 4.9c-.3.9-.5 1.8-.6 3.2C0 8.3 0 8.7 0 12s0 3.7.1 5c.1 1.4.3 2.3.6 3.2a5.61 5.61 0 0 0 1.4 2.1 5.61 5.61 0 0 0 2.1 1.4c.9.3 1.8.5 3.2.6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.4-.1 2.3-.3 3.2-.6a5.61 5.61 0 0 0 2.1-1.4 5.61 5.61 0 0 0 1.4-2.1c.3-.9.5-1.8.6-3.2.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.4-.3-2.3-.6-3.2a5.61 5.61 0 0 0-1.4-2.1A5.61 5.61 0 0 0 19.1.6c-.9-.3-1.8-.5-3.2-.6C15.3 0 14.9 0 12 0zM12 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
