import styles from "./styles.module.sass"
function Header (){

    return(
        <>
        <div>
          <header className={styles.hero}>
             <nav>
                <ul>
                <li> home  </li>
            <li> sobre </li>
            <li>serviços  </li>
            <li> portfolio </li>
            <li> contatos </li>
                </ul>
                <button type={styles.button}> inscreva</button>
        
                </nav>
          </header>
     
        </div>
        
        </>
    )
}

export default Header

