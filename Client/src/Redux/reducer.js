import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, END } from "./actionTypes";

const initialState = {
    myFavorites: [],
    allCharacters: [],
    end: false,
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_FAV:
            return { ...state,
                myFavorites: payload,
                allCharacters: payload 
            };
        case REMOVE_FAV:
            return { ...state,
                myFavorites: payload 
            };
        case FILTER:
            let filt = []
            if(payload === "All") {
                filt = state.allCharacters
            }else {
                filt = state.allCharacters.filter((character) => character.gender === payload)
            }
            return {
                ...state,
                myFavorites: filt
            }
        case ORDER:
            if(payload === "A") {
                let filt = state.allCharacters.sort(function(a,b) {
                    if(a.id > b.id) {
                        return 1;
                    }
                    if(a.id < b.id) {
                        return -1;
                    }
                    return 0
                });
                return {
                    ...state,
                    myFavorites: filt
                }
            }
            else if(payload === "D") {
                let filt = state.allCharacters.sort(function(a,b) {
                    if(a.id < b.id) {
                        return 1;
                    }
                    if(a.id > b.id) {
                        return -1;
                    }
                    return 0
                });
                return {
                    ...state,
                    myFavorites: filt
                }
            }
        case END:
            return {
                ...state,
                end: true,
            }
        default:
            return {
                ...state
            }
    }
}