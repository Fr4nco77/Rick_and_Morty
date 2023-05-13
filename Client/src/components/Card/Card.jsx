import styles from "./Card.module.css"
import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export const Card = (props) => {
   const {id, name, image, status, onClose} = props
   const [ isFav, setIsFav ] = useState(false)

   const myFavorites = useSelector(state => state.myFavorites)
   const dispatch = useDispatch();
   const { pathname } = useLocation();

   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite =() => {
      isFav ? dispatch(removeFav(id)) : dispatch(addFav(props));
      setIsFav(!isFav)
   }

   return (
      <div className={styles.card}>
         {
            isFav ? (
               <button className={styles.fav}onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={styles.fav} onClick={handleFavorite}>🤍</button>
            ) 
         }
         {
            pathname !== "/favorites" && <button id={styles.close}onClick={() => onClose(id)}>X</button>
         }
         <img src={image} alt={name} />
         <Link to ={`/detail/${id}`}><h2>{name}</h2></Link>
         <div className={styles.info}>
            <h3>{status}</h3>
            {/* <h3>{species}</h3> */}
         </div>
      </div>
   )
}
