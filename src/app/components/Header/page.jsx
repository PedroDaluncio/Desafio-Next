import {Press_Start_2P} from 'next/font/google'

import Styles from '../Header/styles.module.css'

const fontGame = Press_Start_2P({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })

export default function Header(){
    return(
        <header className={Styles.Cabecalho}>
        <div className={Styles.logo}>
          <img src="Icon.svg" alt="Logo da página, sendo uma abóbora"></img>
          <span className={fontGame.className}>J<span className={Styles.letraLaranja}>
            O</span>J<span className={Styles.letraLaranja}>O</span>S</span>
        </div>
        <span className={Styles.Menu}>Jogos Sobre Blog <div className={Styles.botaoCarreira}>Carreira</div></span>
      </header>
    )
}