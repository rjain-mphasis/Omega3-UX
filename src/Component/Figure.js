import React, { Component } from 'react';
import { sideBarLinks } from '../Mock/SidebarLinks';

class Figure extends Component {
    state = {  } 
    render() { 
        const figure = sideBarLinks.map((data)=>{return data.style})
        return (
            <div className='main_div'>
                <h1>Figure</h1>
                <p className='para_width'>
                Anytime you need to display a piece of content, like an image with an optional caption, consider using a Figure.
                </p>

                {
                    figure[4].map((data)=>{
                        const style = {
                            width: data.width,
                            height: data.height,
                            border: data.border
                        }
                        return (
                            <>
                            <img src='images/image1.gif' style = {style}></img>
                            <h3 className='para_width'>Your text should be here which you want to display and related image is showing above</h3>
                            </>
                            )
                            
                    })
                }
            </div>
        );
    }
}
 
export default Figure;