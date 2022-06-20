import React, { Component } from 'react'
import Cards from '../sidebar/sidebarpages/Cards'
import Alert from '../sidebar/sidebarpages/Alert'

import Breadcrumb from '../sidebar/sidebarpages/Breadcrumb'
import Dropdowns from '../sidebar/sidebarpages/Dropdowns'
import Toasts from '../sidebar/sidebarpages/Toasts'
import Closebutton from '../sidebar/sidebarpages/Closebutton'
import Badges from '../sidebar/sidebarpages/Badges'
import Progress from '../sidebar/sidebarpages/Progress'
import Navbar2 from '../sidebar/sidebarpages/Navbar2'
import Listgroup from '../sidebar/sidebarpages/Listgroup'
import Summary from '../sidebar/sidebarpages/Summary'
import Button from '../sidebar/sidebarpages/Button'
import {Routes,Route} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'


import Home from './Home'
import Services from './Services'
import Introduction from './Introduction'
import Contacts from './Contacts'


export default class MainPage extends Component {
  render() {
    return (
      <div className='mainpage'>
        <Navbar/>
        <Routes>
        
        
        <Route path='/cards' element={<Cards/>}/>
        <Route path='/alert' element={<Alert/>}/>
        <Route path='/breadcrumb' element={<Breadcrumb/>}/>
        <Route path='/closebutton' element={<Closebutton/>}/>
        <Route path='/toasts' element={<Toasts/>}/>
        <Route path='/progress' element={<Progress/>}/>
        <Route path='/summary' element={<Summary/>}/>
        <Route path='/badges' element={<Badges/>}/>
        <Route path='/navbar2' element={<Navbar2/>}/>
        <Route path='/dropdowns' element={<Dropdowns/>}/>
        <Route path='/listgroup' element={<Listgroup/>}/>
        <Route path='/button' element={<Button/>}/>



        <Route path='/home' element={<Home/>}/>
        <Route path='/introduction' element={<Introduction/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>   
      </div>
    )
  }
}
