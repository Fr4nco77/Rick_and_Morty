import { Card } from '../Card/Card';
import styles from "./Cards.module.css"
import astro from "../../image/astroHomeFav.png"
import { useRef, useEffect } from 'react';
import Typed from "typed.js"
import { connect } from 'react-redux';

export function Cards(props) {
   const { characters, onClose, end } = props;

   const el = useRef(null)
   const text = ["","Rapido, empieza por poner un identificador en el cuadrante superior derecho y acciona el interruptor","Vaya, que ser tan... singular","Seguro esta muerto, revisalo", "Tambien puedes acceder a un ser aleatorio con aquel otro interruptor","...", "...", "Procura no romperlo, no creo que el creador este dispuesto a arreglarlo","Creo que esa ya es mucha informacion, procura desecharla o almacenarla en el deposito para verla en profundidad despues", "Aquí no esta... cuando termines accede al deposito", ""];
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
      if(el.current) {
         const typed = new Typed(el.current, options)
      }
   }, [])


   return (
      <div className={styles.container}>
         {
            end ? (<></>) : (
               <div className={styles.astroContainer}>
                  <img id={styles.astro}src={astro} alt="astro" />
                  <p id={styles.dialogue} ref={el}></p>
               </div>
            )
         }
         
         <div className={styles.cardsContainer}>
            {characters.map((character) => {
               return <Card 
               name = {character.name}
               status = {character.status}
               species = {character.species}
               gender = {character.gender}
               origin = {character.origin}
               image = {character.image}
               onClose = {() => onClose(character.id)}
               key = {character.id}
               id = {character.id}/>
            })}
         </div>
      </div>
   ) ;
}

const mapStateToProps = (state) => {
   return {
      end: state.end
   }
}

export default connect(
   mapStateToProps, 
   null)
   (Cards);