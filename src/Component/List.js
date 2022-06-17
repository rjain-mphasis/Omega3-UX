import React, { Component } from 'react';
import { sideBarLinks } from '../Mock/SidebarLinks';

 
class List extends Component {
    state = {  } 
    render() { 
        const list = sideBarLinks.map((data)=>{return data.style})
        return (
        <div className='main_div'>
            {
                list[7].map((data)=>{
                    return (
                    <>
                    <h2>{data.text} List</h2>
                    <data.type><li>i am {data.text} list</li></data.type>
                    </>
                    )
                })
            }
        </div>
        );
    }
}
 
export default List;