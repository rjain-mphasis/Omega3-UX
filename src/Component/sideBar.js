import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { sideBarLinks } from '../Mock/SidebarLinks';

class Sidebar extends Component {
    state = {  } 
    render() { 
        return (
            <div className='sidebar'>
                <h3>Components</h3>
                {
                    sideBarLinks.map((data) => {
                        return (
                            <li>
                                <Link className='link' to={data.path}>{data.name}</Link>
                            </li>
                        ) 
                    })
                }
            </div>
        );
    }
}
 
export default Sidebar;