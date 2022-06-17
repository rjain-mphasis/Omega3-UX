import React, { Component } from 'react';
import { sideBarLinks } from '../Mock/SidebarLinks';
 
class Heading extends Component {
    state = {  } 
    render() { 
        const heading = sideBarLinks.map((data)=>{return data.style})
        return (
        <div className='main_div'>
            {
                heading[6].map((data)=>{
                    return (<data.type>I am {data.type} heading</data.type>)
                })
            }
            
        </div>
        
        );
    }
}
 
export default Heading;