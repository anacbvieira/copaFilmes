import { useContext } from "react";
import Header from "../../components/Header";
import ListMoviesContext from "../../context/SelectedMoviesContext";
import styles from '../../styles/pages/Result.module.css'


export default function Result() {
    const {winners, secondPlace} = useContext(ListMoviesContext)
    console.log(winners[0].titulo)
        console.log(secondPlace)
    const instruction = "Veja o resultado final do Campeonato de filmes de forma simples e rápida";

    return(
        <div className={styles.container}>
            <Header title="Resultado Final" instruction={instruction} />

            <div className={styles.results}>
                <div className={styles.position}>
                    <span>1°</span>
                </div>
                <div className={styles.title}>
                    <span>{winners[0].titulo}</span>
                </div>
            </div>

            <div className={styles.results}>
                <div className={styles.position}>
                    <span>2°</span>
                </div>
                <div className={styles.title}>
                    <span>{winners[1].titulo}</span>
                </div>
            </div>
            
        </div>
    )
}