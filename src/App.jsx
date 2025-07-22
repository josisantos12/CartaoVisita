function App() {
  const handleScroll = () => {
    const section = document.querySelector('.faleConosco');
    section?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="container">

      <header className="header">
        <img className='logo' src='/logo.png'></img>
        <button  onClick={handleScroll} className="contact">Fale Conosco</button>
      </header>

      <section className="bemVindo">

        <div className="dog">
          <img src="/dogsemfundo.png" />
        </div>

        <div className="conteudo">
          <img className="logobranco" src="logobranco.png" />
          <p className="slogan">O mundo dos jogos começa aqui</p>
        </div>
      </section>

   <section class="sobre-nos">
  <div className="conteudo">
    <h2>🎮 Sobre nós – Honey Pup 🐾</h2>
    <p class="intro">
      Na Honey Pup, criamos mais do que jogos: criamos mundos. Fundada com a paixão por contar histórias envolventes e oferecer experiências memoráveis, somos uma empresa de desenvolvimento de games que acredita no poder da criatividade, da diversão e da conexão.
    </p>
    <p>
      Nosso nome é inspirado na lealdade e alegria de um filhote — e é exatamente isso que buscamos trazer em cada projeto: uma experiência acolhedora, vibrante e inesquecível. Seja explorando universos fantásticos ou enfrentando desafios surpreendentes, nossos jogos são feitos para emocionar.
    </p>
    <ul class="valores">
      <li><strong>🎮 Jogabilidade com alma:</strong> cada detalhe importa.</li>
      <li><strong>📚 Narrativas que marcam:</strong> criamos histórias que tocam.</li>
      <li><strong>👥 Comunidade em foco:</strong> ouvimos, aprendemos e evoluímos junto com quem joga.</li>
    </ul>
    <p>
      Estamos em constante crescimento, combinando talento, inovação e carinho em tudo que desenvolvemos. Para nós, cada jogo é uma aventura — e queremos que você venha nessa jornada conosco.
    </p>
  </div>

  <div className="bee">
          <img src="/bee.png" />
        </div>
        
</section>

<section className="faleConosco">
  <h2>Fale Conosco</h2>
  <form className="formulario">
    <input type="text" placeholder="Seu nome" required />
    <input type="email" placeholder="Seu e-mail" required />
    <textarea placeholder="Sua mensagem" required></textarea>
    <button type="submit">Enviar</button>
  </form>
</section>

<footer className="rodape">
  <p>© 2025 HoneyPup Studios. Todos os direitos reservados.</p>
  <div className="icones">
    <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">
      <img src="/linkedin.png" alt="LinkedIn" />
    </a>
    <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noopener noreferrer">
      <img src="/whatsapp.png" alt="WhatsApp" />
    </a>
    <a href="https://www.instagram.com/seuusuario" target="_blank" rel="noopener noreferrer">
      <img src="/instagram.png" alt="Instagram" />
    </a>
  </div>
</footer>



      
    </div>
  );
}

export default App;
