import { useState } from 'react'
import NavBar from './Components/navBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {originals,action,ComedyMovies,HorrorMovies,ActionMovies,RomanceMovies,Documentaries} from './urls'

function App() {
  return (
    <>
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals'/>
    <RowPost url={action} title='Action' isSmall/>
    <RowPost url={ComedyMovies} title='ComedyMovies' isSmall/>
    <RowPost url={HorrorMovies} title='HorrorMovies' isSmall/>
    <RowPost url={ActionMovies} title='ActionMovies' isSmall/>
    <RowPost url={RomanceMovies} title='RomanceMovies' isSmall/>
    <RowPost url={Documentaries} title='Documentaries' isSmall/>
    </>
  )
}

export default App
