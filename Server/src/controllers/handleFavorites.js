let myFavorites = [];

const postFav = (req, res) => {
    const character = req.body;
    myFavorites.push(character);
    return res.status(200).json(myFavorites);
}

const deleteFav = (req, res) => {
    const { id } = req.params;

    const deleteCharacter = myFavorites.filter((character) => {
        return character.id !== id
    })
    // for (let i = 0; i < myFavorites.length; i++) { 
    //     if(myFavorites[i].id === id) {
    //         myFavorites.splice(i, 1)
    //         break
    //     }
    // }
    myFavorites = deleteCharacter
    return res.status(200).json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav,
}