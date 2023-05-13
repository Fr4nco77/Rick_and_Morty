import style from "./SearchBar.module.css"
import { useState } from "react";
import shuffle from "../../image/shuffle.png"
import lupa from "../../image/search.png"
export default function SearchBar(props) {

   let [ id, setId ] = useState("")

   const handleChange = (e) => {
      setId(e.target.value)
   }

   const clear = () => {
      props.onSearch(id)
      setId("");
   }
   const random = Math.floor(Math.random() * 827) +1;
   return (
      <div className={style.search}>
         <input type='search' placeholder="Search..." value={id} onChange={handleChange}/>
         <button onClick={clear}><img className={style.iconos} src={lupa} alt="lupa"/></button>
         <button onClick={() => props.onSearch(random)}><img className={style.iconos} src={shuffle} alt="shuffle"/></button>
      </div>
   );
}