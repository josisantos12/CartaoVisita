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
          <p className="intro">Na Honey Pup, criamos mais do que jogos: criamos mundos...</p>
          <ul className="valores">
            <li><strong>🎮 Jogabilidade com alma:</strong> cada detalhe importa.</li>
            <li><strong>📚 Narrativas que marcam:</strong> criamos histórias que tocam.</li>
            <li><strong>👥 Comunidade em foco:</strong> ouvimos, aprendemos e evoluímos junto com quem joga.</li>
          </ul>
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
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
      
          <a href="https://www.instagram.com/josimoota/" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
