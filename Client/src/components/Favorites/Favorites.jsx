import { connect } from 'react-redux'
import { Card } from '../Card/Card'
import { filterCards, orderCards } from '../../Redux/action'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import styles from "./Favorites.module.css"
import Typed from "typed.js"
import astro from "../../image/astroHomeFav.png"
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'

export const Favorites = ({ myFavorites }) => {

    const [ aux, setAux ] = useState(false)

    const dispatch = useDispatch();

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
        setAux(!aux);
    }
    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value));
    }

    const el = useRef(null)
    const text = ["", "Que curioso esas tarjetas de refencia eran mis preferidas, aunque nunca entendí bien por qué","Mi padre solia decirme que todo me fascinaba...ja", "...", "..", "Perdon me fui por un momento", "Si quieres puedes ordenar esas tarjetas con los interruptores de arriba y/o devolverlas a su sitio cuando allas acabado con ellas", "Aparte puedes acceder al Reporte de cada individuo, aunque con la cantidad de informacion que hay alrededor nuestro seria una perdida de tiempo", ""];
    const options = {
        strings: text,
        typeSpeed: 50,
        starDelay: 1000,
        backSpeed: 25,
        backDelay: 2000,
        loop: false,
        showCursor: false,
    };
    
    useEffect(() => {
        const typed = new Typed(el.current, options)
    }, [])

    return(
        <div id={styles.container}>
            <div className={styles.favorites}>
                <div className={styles.filters}>
                    <select onChange={handleOrder}>
                        <option value="A">Ascending</option>
                        <option value="D">Descending</option>
                    </select>
                    <select onChange={handleFilter}>
                        <option value="All">All</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">unknown</option>
                    </select>
                </div>
                <div className={styles.cards}>
                    {
                        myFavorites?.map((character) => {
                            return(
                                <Card
                                    name = {character.name}
                                    status = {character.status}
                                    image = {character.image}
                                    key = {character.id}
                                    id = {character.id}/>
                                )
                        })
                    }
                </div>
            </div>
            <div className={styles.astroContainer}>
                <p id={styles.dialogue} ref={el}></p>
                <Link to="/about"><img id={styles.astro}src={astro} alt="astro" /></Link>
            </div>
        </div>)
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps, 
    null)
    (Favorites);
