const Validation = (data) => {
    let errors = {};
    const emailRegexp = new RegExp(/\S+@\S+\.\S+/);
    const passwordRegexp = new RegExp(/^[a-z0-9_-]{6,10}$/);
    
    if(!emailRegexp.test(data.email)) {
        errors.email = "Debe ingresar un email valido"
    }

    if(data.email.length > 35) {
        errors.caracteres = "Debe ser un email menor a 35 caracteres"
    }

    if(!passwordRegexp.test(data.password)) {
        errors.password = "La contraseña no es valida"
    }

    return errors
}

export default Validation