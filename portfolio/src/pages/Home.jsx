import fotoPerfil from '../assets/gian.png'
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Olá, eu sou o Gian</h1>
        <p>Desenvolvedor em formação, focado em full-stack.</p>
        <div className="home-links">
          <Link to="/projetos" className="btn-primary">Ver projetos</Link>
          <Link to="/contato" className="btn-secondary">Entrar em contato</Link>
        </div>
      </div>
      <div className="home-image">
        <img src={fotoPerfil} alt="Foto de Gian Warmling" />
      </div>
    </section>
  );
}

export default Home;