import React, { Component } from 'react';
import { sideBarLinks } from '../Mock/SidebarLinks';

class Card extends Component {
    state = {}
    render() {
        const cards = sideBarLinks.map((data) => { return data.style })
        return (
            <div className='main_div'>
                <h1>Cards</h1>
                {cards[2].map((data) => {
                    const cardStyle = {
                        width: data.width,
                        height: data.height.card_height,
                        border: data.border.card_border,
                    }
                    const imgStyle = {
                        border: data.border.img_border,
                        height: data.height.img_height
                    }
                    return <div style={cardStyle}>
                        <img src="images/img300.png" alt="not found" style={imgStyle} />
                        <div class="container">
                            <h4><b>John Doe</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                    </div>
                })}
            </div>
        );
    }
}

export default Card;