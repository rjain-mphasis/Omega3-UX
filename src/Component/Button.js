import React, { Component } from 'react';
import { sideBarLinks } from '../Mock/SidebarLinks';

class Button extends Component {
    state = {}
    render() {
        const buttons = sideBarLinks.map((data)=>{return data.style})
        console.log('buttons =>', buttons);
        return (
            <div className='main_div'>
                <h1>Button</h1>
                <p>The button tag defines a clickable button.
                    Inside a button element you can put text</p>
                <h2>Tip</h2>
                <p>Always specify the type attribute for a button element, to tell browsers what type of button it is.</p>
                <p>You can easily style buttons with CSS! Look at the examples below</p>

                {buttons[1].map((data)=>{
                    let style = {
                        width: data.width,
                        height: data.height,
                        backgroundColor: data.backgroundColor,
                        padding: data.padding,
                        border: data.border,
                        marginLeft: data.margin_left
                    }
                    return (<button style={style}>{data.name}</button>);
                })}

            </div>
        );
    }
}

export default Button;