import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from "./components/About/About"
import Detail from './components/Detail/Detail';
import Nop from './components/404/404'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Form from "./components/Form/Form"
import Favorites from './components/Favorites/Favorites';

function App() {
   const [ characters, setCharacters ] = useState([]);
   const [ access, setAccess ] = useState(false);


   const { pathname } = useLocation();
   const navigate = useNavigate();

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      } catch (error) {
         return {error: error.message}
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   async function onSearch(id) {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         const char = characters?.find(e => e.id === Number(data.id))
         if (char){
            alert("Already in the list") 
          }

         else if(data.id !== undefined) {
            setCharacters(characters => [...characters, data]);
         }
        
         else {
            alert('Character not found');
         }
      } catch (error) {
         return {error: error.message}
      }
    }

   const onClose = (id) => {
      setCharacters(
         characters.filter((character) => character.id !== id)
      )
   }

   return (
      <div className='App'>
         {pathname !== '/' && <Nav onSearch={onSearch}/>}
         <Routes>
            <Route path ="/home" element={<Cards characters={characters} onClose={onClose}/>}></Route>
            <Route path = "/about" element={<About/>}></Route>
            <Route path = "/detail/:id" element={<Detail/>}></Route>
            <Route path = "/" element={<Form login={login}/>}></Route>
            <Route path= "/favorites" element={<Favorites />}></Route>
            <Route path = "*" element={<Nop/>}></Route>
         </Routes>
      </div>
   );
}

export default App;
