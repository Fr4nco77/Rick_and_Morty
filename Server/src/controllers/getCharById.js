const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async(req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios(URL + id)
        const {status, name, species, origin, image, gender} = data;
        const character = { id, status, name, species, origin, image, gender}
        return (
            character ? res.status(200).json(character) 
            : res.status(404).send("Character Not found")
        )
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getCharById
};