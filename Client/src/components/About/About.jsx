import styles from "./About.module.css"
import astro from "../../image/about.jpg"
import { useState, useEffect } from "react";
import Typed from "typed.js"
import Select from 'react-select'

const About = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { 
            value: "¿Quien Eres?", 
            label: "¿Quien Eres?", 
            answer: " ... oh perdon, olvide presentarme. Soy Anne, una de los ultimos humanos con vida, de hecho naci en aquel planet,'Origin' aunque creo que lo llamaban Tierra antes de el 1° Choque.<br> Como sea todo a cambiado y los que quedamos aprendimos a vivir con ello...menos el" },
        { value: "Que es este lugar", label: "Cuentame sobre el creador", answer: 'Respuesta' },
        { value: "Cuentame sobre el creador", label: "Cuentame sobre el creador", answer: 'Respuesta' }
    ];

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };


    useEffect(() => {
        if (selectedOption) {
        new Typed('.typed-text', {
            strings: [selectedOption.answer],
            typeSpeed: 50,
            backSpeed: 30,
            loop: false,
        });
        }
    }, [selectedOption]);

    return (
        <div className={styles.container}>
            <div id={styles.astro}>
                <img src={astro} alt="astro"/>
                <div id={styles.questions}>
                    <div className={styles.text}>
                    {   
                        selectedOption ? ( <p className="typed-text"></p>)
                        : (<p>Su mirada se encuentra fija en aquel cercano planeta, pero sientes que realmente esta viendo algo que ya no estara más...</p>)
                    }
                    </div>
                    <div className={styles.select}>
                    <Select
                        value={selectedOption}
                        onChange={handleChange}
                        options={options}
                        placeholder="Selecciona una pregunta"
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
