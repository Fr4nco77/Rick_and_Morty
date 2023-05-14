import styles from "./About.module.css"
import astro from "../../image/about.jpg"
import { useState, useEffect } from "react";
import Typed from "typed.js"
import Select from 'react-select'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { end } from "../../Redux/action";
const About = () => {
    
    const [selectedOption, setSelectedOption] = useState(null);
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const options = [
        { 
            value: "¿Quién Eres?", 
            label: "¿Quién Eres?", 
            answer: " ... oh Perdón, olvide presentarme.<br> Soy Anne Coof, una de los últimos humanos con vida, de hecho nací en aquel planeta de allá al que llamaban Origin, aunque creo que lo llamaban Tierra antes del 1er Choque.<br> Como sea todo a cambiado y pensar en el pasado no va a corregir el presente... ja creo que todos los supervivientes dicen lo mismo." },
        { 
            value: "¿Qué puedes contarme de este lugar?",
            label: "¿Qué puedes contarme de este lugar?",
            answer: "Es una historia complicada... trataré de hacerte un resumen.<br> Hace algunos siglos mi especie logro romper sus fronteras y se extendió tanto como quiso dentro de esta galaxia, pero dicho logro no cambio su forma de ver la vida. Así que hicieron lo que estaban acostumbrados a hacer, pero a una escala mayor, es decir guerras por poder, por tal dios, etc. Rápidamente dichos conflictos fueron escalando y la sensación de seguridad se volvió cada vez más abstracta.<br> Todo iba a peor hasta que un simple científico, al que tiempo después por consenso popular llamarían 'Creador', logro crear y establecer un enlace neuronal que permitía comprender y sentir al otro, al poco tiempo casi toda la humanidad estaba unida a pesar de todo. Los que se conectaban tenían una mayor empatía y casi instantáneamente reconsideraban su perspectiva de la vida.<br> En serio como desearía que la historia terminara así...                    <br> Pero poco tiempo después cuando mi especie brillaba de esperanza y futuro, una parte quiso continuar con las guerras y lograron convertir el enlace en un arma, solo imaginátelo!, planetas enteros ardiendo hasta que cada criatura se volvió ceniza, gritos irrumpían y estremecían el espacio, las estrellas voluntariamente dejaron de iluminar el vacío y lo que una vez nos unió nos mataba.<br> Para cuando el Creador logro desconectarnos del enlace ya no quedaba nada en esta galaxia, salvo un centenar de personas que sin opción debían abandonar su hogar. Y como si todo el odio que tuvieron que soportar no fuera suficiente, lo único que hicieron unidos fue buscar alguien a quien odiar y culpar de todo...                           <br>odiaron y marginaron al Creador, lo dejaron atrás."},
        { 
            value: "¿Qué fue del Creador?", 
            label: "¿Qué fue del Creador?", 
            answer: " Él lo perdió todo, su amor al prójimo lo dejo sin nada. Solo le quedaba su hija y ella al igual que todos decidio odiarlo y abandonarlo, con la diferencia de que ella sabía que hacer y decir para realmente herirlo...                               nadie supo nada más de el.<br> Pero después surgieron varias historias sobre que esta galaxia había sido modificada, dividida, sellada, cada historia más rara que la anterior. Por eso decidí volver, y descubrí que el Creador nunca logro desconectarse del enlace y que dentro de si quedo el recuerdo de cada persona. El carga con todas las experiencias, alegrías y tristezas de mi especie, con tal perspectiva el cambio...                           no sé como explicarlo, siquiera sé si lo entiendo, pero el dejo de envejecer y se dedicó a modificar este yermo y construir los sectores. Piensa que cada sector es como una base de datos.<br> Por ejemplo: ahora estamos en el sector 'FT-37b', los sectores 'FT' están destinados a almacenar el arte audiovisual de mi especie, el número '37' hace referencia al siglo XXI y la 'b' hace referencia a la serie <u>'Rick and Morty'.</u><br> Convirtió esta galaxia en un museo de lo que fue en su pasado, él se encargó de que nada ni nadie fuera olvidado..."},
        {
            value: "¿Qué estás buscando?",
            label: "¿Qué estás buscando?",
            answer: ' Al Creador...                      <br>pensé que alguien debería buscarlo y pedirle perdón, o al menos acompañarlo., quien sabe hasta cuando viva y con lo que carga dentro de sí. Dio todo lo que podía y solo recibió abusos, y a pesar de eso construyo este lugar. No debería seguir solo.<br>                 (suspiro entrecortado)<br>           <br> Sabes creo que no lo voy a encontrar aquí y ya perdí suficiente tiempo, será mejor que siga con mi camino. Me dio gusto haberte conocido aunque no hayas dicho mucho jajaja, realmente aprecio que me acompañaras.<br>                        <br>No creo que te lo vayas a cruzar, pero si llegara a pasar...               <br>dile que su hija lo está buscando y que realmente lo siente...<br><br>                                                         <span>Adiós Anne</span>                                    <br><br>                          Adiós'
        }
    ];
    const handleEnd = () => {
        if(count === 3) {
            dispatch(end());
            navigate("/home"); 
        }else {
            setCount(count + 1)
        }
    }

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };
    
    useEffect(() => {
        if (selectedOption) {
            
        new Typed('.typed-text', {
            strings: [selectedOption.answer],
            typeSpeed: 40,
            backSpeed: 1.5,
            startDelay: 500,
            loop: false,
            showCursor: false,
            onComplete: handleEnd,
            });
        }
    }, [selectedOption]);

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderRadius: "15px",
            border: "none",
            width: "300px",
            cursor: "pointer",
            backgroundColor: "#fcfcfa",
            outline: state.isFocused ? "1px solid white" : "none",
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: "black",
            color: "grey",
            cursor: "pointer",
            textAlign: "center",
            borderRadius: "20px",
            borderBottom: "solid grey 1px",
            fontSize: "15px",
        }),
        menu: (provided, state) => ({
            ...provided,
            borderRadius: "20px",
            backgroundColor: "transparent"
        }),
        indicatorSeparator: (provided, state) => ({
            ...provided,
            display: "none"
        }),
    };

    return (
        <div className={styles.container}>
            <div id={styles.astro}>
                <img src={astro} alt="astro"/>
                <div id={styles.questions}>
                    <div className={styles.text}>
                    {   
                        selectedOption ? ( <p className="typed-text"></p>)
                        : (<p>Su mirada se encuentra fija en aquel cercano planeta, pero sientes que realmente está viendo algo que dejo de existir hace mucho tiempo...</p>)
                    }
                    </div>
                    <Select
                        value={selectedOption}
                        onChange={handleChange}
                        options={options}
                        placeholder="Selecciona una pregunta"
                        styles={customStyles}
                    />
                </div>
            </div>
        </div>
    )
}
export default About
