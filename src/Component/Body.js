import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { pageDetails } from '../Mock/Mock';
import { sideBarLinks } from '../Mock/SidebarLinks';

import Home from './Home';
import About from './About';
import Services from './Services';
import Alert from './Alert';
import Button from './Button';
import Card from './Card';
import Dropdown from './Dropdown';
import Figure from './Figure';
import Pagination from './Pagination';
import Heading from './Heading';
import List from './List';

class Body extends Component {
    state = {}
    render() {
        const components = {
            'Home': <Home />,
            'About': <About />,
            'Services': <Services />,
            'Alert': <Alert />,
            'Button': <Button />,
            'Card': <Card/>,
            'Dropdown': <Dropdown/>,
            'Figure': <Figure/>,
            'Pagination': <Pagination/>,
            'Heading': <Heading/>,
            'List': <List/>,
        }
        
        return (

            <div className='body'>

                <Routes>
                    {/* <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/button" element={<Button />} />
                    <Route path="/alert" element={<Alert />} />
                    <Route path="/card" element={<Card />} />
                    <Route path="/dropdown" element={<Dropdown />} />
                    <Route path="/figure" element={<Figure />} />
                    <Route path="/pagination" element={<Pagination />} />
                    <Route path="/heading" element={<Heading />} />
                    <Route path="/list" element={<List />} /> */}

                

                {
                pageDetails.map(( data)=>{
                    return (
                        <>
                        <Route  path={data.path} element={components[data.name]}/>                        
                        </>
                        )
                    })
                }
                {
                    sideBarLinks.map(( data)=>{
                        return (
                            <>
                            <Route  path={data.path} element={components[data.name]}/>                        
                            </>
                            )
                        }) 
                } 
                </Routes>
            </div>



        );
    }
}

export default Body;