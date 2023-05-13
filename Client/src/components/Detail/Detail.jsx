import axios from "axios"
import { useParams, Link } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import styles from "./Detail.module.css"
import astro from "../../image/astroDetail.png"
import Typed from "typed.js"

const Detail = () => {
    const { id } = useParams();
    const [ character, setCharacter ] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


    const el = useRef(null)
    const text = ["", "Te dije una perdida de tiempo... como haber venido a este sector", "...", "...", "Pense que habia una posibilidad de encontrarlo, pero nunca dejo de equivocarme", "", "Explora el sector cuanto quieras, ire a sentarme un rato", ""];
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


    return (
        <div className={styles.container}>
                
            {
                character ? (
                    <div className={styles.detail}>
                    <img src={character.image} alt={character.name} />
                    <div className={styles.info}>
                        <h1>Report: </h1>
                        <br/>
                        <h3>Name: {character.name}</h3>
                        <h3>Status: {character.status}</h3>
                        <h3>Species: {character.species}</h3>
                        <h3>Gender: {character.gender}</h3>
                        <h3>Origin: {character.origin?.name}</h3>
                    </div>
                    </div>
                ) :  ("")
            }
            <div className={styles.astroContainer}>
                <p id={styles.dialogue}ref={el}></p>
                <Link to="/about"><img id={styles.astro} src={astro} alt="astro" /></Link>
            </div>
        </div>
    )
}

export default Detail