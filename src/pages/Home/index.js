import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Header from "../../components/Header"
import ListMovies from '../../components/ListMovies'
import ListMoviesContext from '../../context/SelectedMoviesContext.js'

import styles from '../../styles/pages/Home.module.css'

export default function Home() {

    const { movies, winners } = useContext(ListMoviesContext)
    const history = useHistory()
    const instruction = "Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão Gerar Meu Campeonato para prosseguir";

    function alphabeticalOrder(moviesArray) {
        let listMovies = movies.sort(function (a, b) {	
            return (a.titulo > b.titulo) ? 1 : ((b.titulo > a.titulo) ? -1 : 0);     
        })
        return listMovies
    }

    function eliminatory(moviesArray) {
        let eliminatory = []
        let end = 7

        for (let i = 0; i < 4; i++) {
            if (i < 4) {
                debugger
                if (moviesArray[i].nota > moviesArray[end].nota) {
                    eliminatory.push(moviesArray[i])
                    end--
                } else if (moviesArray[i].nota === moviesArray[end].nota) {
                    let data = alphabeticalOrder([moviesArray[i], moviesArray[end]])
                    eliminatory.push(data[0])
                    end--
                } else {
                    eliminatory.push(moviesArray[end])
                    end--
                }
            }
        }
        return eliminatory
    }

    function semiFinals(moviesArray) {
        let semiFinal = []

        for (let j = 0; j < 4; j = j + 2) {
            if (moviesArray[j].nota > moviesArray[j + 1].nota) {
                semiFinal.push(moviesArray[j])
            } else if (moviesArray[j].nota === moviesArray[j + 1].nota) {
                let data = alphabeticalOrder([moviesArray[j], moviesArray[j + 1]])
                semiFinal.push(data[0])
            }  else {
                semiFinal.push(moviesArray[j + 1])
            }
        }
        return semiFinal
    }

    function final(moviesArray) {
        if (moviesArray[0].nota > moviesArray[1].nota) {
            winners.push(moviesArray[0])
            winners.push(moviesArray[1])
        } else if (moviesArray[0].nota === moviesArray[1].nota) {
            let data = alphabeticalOrder([moviesArray[0], moviesArray[1]])
            winners.push(data[0])
            winners.push(data[1])
        } else{
            winners.push(moviesArray[1])
            winners.push(moviesArray[0])
        }
    }
    
    function whoIsThewinner() {
        
        let selesctedMovies = movies.filter(m => m.checked)
        console.log("selected " + selesctedMovies)

        let competitors = eliminatory(selesctedMovies)
        console.log("competitors " + competitors)

        let semiFinalists = semiFinals(competitors)
        console.log("semiFinalists " + semiFinalists)
        
        history.push("/result")

        return final(semiFinalists)

       

    }

    return (

        <div className={styles.container}>

            <Header title="Seleção de filmes" instruction={instruction} />

            <div className={styles.selectButton}>
            <div className={styles.select}>
                        <p>Selecionados</p>
                        {
                            (movies)?  <span>{movies.filter(m => m.checked).length} de 8 filmes</span> : ""
                        }
                       
                    </div>

                <div className={styles.button}>
                    <button 
                        onClick={whoIsThewinner}
                        disabled={(movies.filter(m => m.checked === true)).length !== 8}
                    > 
                        Gerar meu Campeonato
                    </button>
                </div>

            </div>

            <ListMovies />
        </div>


    )

}

