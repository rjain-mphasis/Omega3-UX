import React, { Component } from 'react';
import { sideBarLinks } from '../Mock/SidebarLinks';

class Pagination extends Component {
    state = {  } 
    render() { 
        const next_prev = sideBarLinks.map((data)=>{return data.next_prev})
        const simple = sideBarLinks.map((data)=>{return data.simple})
        return (
            <div className='main_div'>
                <h1>Pagination</h1>
                <p className='para_width'>If you have a website with lots of pages, you may wish to add some sort of pagination to each page:</p>

                <h2>Next/Previous Button</h2>
                {
                    next_prev[5].map((data)=>{
                        const style = {
                            color: data.color,
                            padding: data.padding,
                            border: data.border,
                            display: data.display,
                        }
                        return (
                        <div style={style}>
                            <a  href="">{data.type}</a>
                        </div>
                        )
                    })
                }

                <h2>Simple Pagination</h2>
                {
                    simple[5].map((data)=>{
                        const style = {
                            color: data.color,
                            padding: data.padding,
                            border: data.border,
                            display: data.display,
                        }
                        return (
                        <div style={style}>
                            <a  href="">{data.type}</a>
                        </div>
                        )
                    })
                }
            </div>
        );
    }
}
 
export default Pagination;