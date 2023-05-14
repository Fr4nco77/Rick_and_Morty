import styles from "./Form.module.css"
import astro from "../../image/astro-form.png"
import { useState, useEffect, useRef } from "react";
import Typed from "typed.js"
import Validation from "./Validation";
import { connect } from "react-redux";

export const Form = (props) => {
    const { login, end } = props
    const [ userData, setUserData ] = useState({ email: '', password: ''})
    const [ errors, setErrors ] = useState({})

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [ e.target.name ]: e.target.value 
        })
        setErrors(Validation( {
            ...userData,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(userData)
    }

    const el = useRef(null)
    const text = ["","Hey tu", "Si tu", "Tenes credenciales de acceso al sector", "Te importaria si te acompaño, necesito entrar pero esas credenciales son unicas y limitadas","A lo mejor podria guiarte dentro", "Gracias, vamos", "","Que credencial tan peculiar...", ""];
    const options = {
        strings: text,
        typeSpeed: 50,
        starDelay: 1000,
        backSpeed: 25,
        backDelay: 2000,
        loop: false,
        showCursor: false
    };
    
    useEffect(() => {
        if(el.current) {
            const typed = new Typed(el.current, options)
        }
    }, [])
 
    return(
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.top}>
                    <h1>Sector FT-37b</h1>
                    <p id={styles.subTitle}>Status:</p>
                    <p id={styles.riei}>Completed</p>
                </div>
                <div className={styles.inputs}>
                    <input type="email" placeholder="Your email" name="email" value={userData.email} onChange={handleChange}/> 
                    {   errors.email ? (
                            <p>{errors.email}</p>
                        ) : errors.emailVacio ? (
                            <p>{errors.emailVacio}</p>
                        ) : errors.caracteres ? (
                            <p>{errors.caracteres}</p>
                        ) : null
                    }
                    <input type="password" placeholder="Password" name="password" value={userData.password} onChange={handleChange}/>
                    {   errors.password ? (
                            <p>{errors.password}</p>
                        ) : null 
                    }
                </div>
                <button className={styles.btn} type="submit" onClick={handleSubmit}>Log In</button>
            </form>
            {
                end ? (<></>) : (
                    <div className={styles.astronautContainer}>
                        <p ref={el} id={styles.dialogue}></p>
                        <img src={astro} alt="astro" className={styles.astronaut}/>
                    </div>
                )
            }
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        end: state. end
    }
}

export default connect(mapStateToProps, null)(Form)