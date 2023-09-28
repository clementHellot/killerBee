import React from 'react'

import HomePanel from './panels/HomePanel.js' // Utilisez l'importation ES6
import IngredientsPanel from './panels/IngredientsPanel.js' // Utilisez l'importation ES6
import FreezBePanel from './panels/FreezBePanel.js'

import Header from './components/Header.js'
import Menu from './components/Menu.js'

import CrudShow from './components/crud/Show.js';
import CrudCreate from './components/crud/Create.js';
import CrudEdit from './components/crud/Edit.js';


import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import './App.css'
import ProcedePanel from './panels/ProcedePanel.js'

const menuList = [
    {
        name: "Home",
        link: "/",
        icon: "fa fa-home",
        component: HomePanel
    },
    {
        name: "Ingrédients",
        link: "/ingredients",
        icon: "fa fa-cutlery", // Replace with the appropriate icon class
        component: IngredientsPanel
    },
    {
        name: "FreezBe",
        link: "/freezbes",
        icon: "fa fa-snowflake-o", // Replace with the appropriate icon class
        component: FreezBePanel
    },
    {
        name: "Procedés",
        link: "/procedes",
        icon: "fa fa-cogs", // Replace with the appropriate icon class
        component: ProcedePanel
    },

];


function App() {
    const routes = menuList.map((menuItem, index) => (

        <Route path={menuItem.link} element={<menuItem.component />} />

    ));



    return (<div className="App" >
        <Header />
        <div className='flex' style={{
            justifyContent: 'space-around',
            padding: '1rem 0',
        }}>
            <Router>

                <div><Menu list={menuList}/></div>
                
                <Routes>
                    {routes}

                    <Route path='crud/:section/:id' element={<CrudShow />}></Route>
                    <Route path='crud/:section' element={<CrudCreate />}></Route>
                    <Route path='crud/edit/:section/:id' element={<CrudEdit />}></Route>
                </Routes>

            </Router>

        </div>
    </div>
    )
}

export default App