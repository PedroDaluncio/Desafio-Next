import Styles from "./styles.module.css"


export default function Images(){
    return(
        <>
            <img src="pacmanprincipal.svg" alt="imagem do Pac Man fugindo dos fantasmas" className={Styles.bigPacman}></img>
            <div>
                <img src="pacmanpequeno.svg" alt="imagem do Pac Man fugindo dos fantasmas, só que em tamanho reduzido" className={Styles.imagens}></img>
                <img src="tetris.svg" alt="imagem de uma partida de tetris" className={Styles.imagens}></img>
                <img src="joguinhodestruirnaves.svg" alt="imagem de um jogo de destruir naves" className={Styles.imagens}></img>
            </div>
        </>
    )
}