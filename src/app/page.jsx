import  Header  from "./components/Header/page"


export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="landingPage">
        <img src="pacmanprincipal.svg" alt="imagem do Pac Man fugindo dos fantasmas"></img>
        <div className="Imagens">
          <img src="pacmanpequeno.svg" alt="imagem do Pac Man fugindo dos fantasmas, só que em tamanho reduzido"></img>
          <img src="tetris.svg" alt="imagem de uma partida de tetris"></img>
          <img src="joguinhodestruirnaves.svg" alt="imagem de um jogo de destruir naves"></img>
        </div>
        <section>
          <span className="sobreNos">Sobre Nós</span>
          <div className="TextoImagem">
            <p>
              Bem-vindo à Jojos, uma empresa de jogos retrô brasileira!
              Somos uma equipe apaixonada por games clássicos e estamos comprometidos em trazer de volta a magia desses títulos
              que marcaram época. Com gráficos pixelizados, trilhas sonoras envolventes e mecânicas desafiadoras,
              nossos jogos são verdadeiras homenagens aos consoles e computadores que encantaram o passado.
              Junte-se a nós e embarque em uma viagem nostálgica repleta de aventuras.<br></br>
              Acreditamos que os jogos retrô têm o poder de unir gerações,
              despertar memórias afetivas e proporcionar momentos de pura diversão.
              Nossa missão é manter viva a essência dos jogos clássicos, levando você a uma jornada inesquecível pelos mundos pixelizados
              cheios de magia. Faça parte dessa nova era retrô e mergulhe em experiências que continuam a encantar corações até hoje.<br></br>
              Jojos, onde a nostalgia encontra a diversão! Com uma equipe apaixonada por games,
              estamos comprometidos em trazer de volta a magia dos jogos clássicos que marcaram gerações inteiras.
              Explore nossos jogos e embarque em uma viagem nostálgica repleta de aventuras e desafios.
              Junte-se a nós e compartilhe da nossa paixão pelos jogos retrô!
            </p>
          </div>
        </section>
        <section>
          <span className="Carreira">Carreira</span>
          <section className="Vagas">
            <div>Desenvolvedor C++ Júnior
              <span>DEV</span>
              <span>Remoto</span>
            </div>
            <div>Desenvolvedor C++ Pleno
              <span>DEV</span>
              <span>Remoto</span>
            </div>
            <div>Engenheiro de Software
              <span>Engenheiro</span>
              <span>Remoto</span>
            </div>
            <div>Artista Técnico
              <span>Arte</span>
              <span>Remoto</span>
            </div>
            <div>Representante Comercial
              <span>Comercial</span>
              <span>Remoto</span>
            </div>
          </section>
        </section>
      </main>
      <hr className="linhaFinal"></hr>
      <footer className="footer">
        © JOJOS GAME STUDIO. ALL RIGHTS RESERVED
      </footer>
    </>
    )
}
