import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Cabeçalho */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">MyBrand</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Seção Banner */}
      <section className="hero" id="home">
        <h1>Bem-vindo à Landing Page</h1>
        <p>Sua solução para desenvolvimento web moderno</p>
        <a href="#services" className="cta-button">Saiba Mais</a>
      </section>

      {/* Seção Sobre */}
      <section className="about" id="about">
        <h2>Sobre Nós</h2>
        <p>Somos uma empresa especializada em soluções web inovadoras para atender suas necessidades.</p>
      </section>

      {/* Seção Serviços */}
      <section className="services" id="services">
        <h2>Nossos Serviços</h2>
        <div className="services-container">
          <div className="service">
            <h3>Desenvolvimento Web</h3>
            <p>Criamos sites responsivos e modernos.</p>
          </div>
          <div className="service">
            <h3>SEO Otimizado</h3>
            <p>Melhoramos sua presença nos motores de busca.</p>
          </div>
          <div className="service">
            <h3>Design UI/UX</h3>
            <p>Designs criativos que focam na experiência do usuário.</p>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section className="contact" id="contact">
        <h2>Contato</h2>
        <p>Entre em contato conosco para saber mais!</p>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <p>&copy; 2023 MyBrand. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

