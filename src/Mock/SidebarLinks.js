 import Alert from "../Component/Alert"
// import Button from "../Component/Button"
// import Card from "../Component/Card"
// import Dropdown from "../Component/Dropdown"
// import Figure from "../Component/Figure"
// import Pagination from "../Component/Pagination"

export const sideBarLinks = [
    {
        id: 1,
        name: 'Alert',
        path: '/alert',
        //element: <Alert />,
        style: [
            {
                name: 'primary',
                width: '300px',
                height: '40px',
                margin_bottom: '15px',
                backgroundColor: '#81ecec'
            },
            {
                name: 'secondary',
                width: '300px',
                height: '40px',
                margin_bottom: '15px',
                backgroundColor: '#fab1a0'
            },
        ]
    },
    {
        id: 2,
        name: 'Button',
        path: 'button',
        //element: <Button/>,
        style: [
            {
                name: 'primary',
                width: '80px',
                height: '30px',
                margin_left: '15px',
                padding: '2px',
                border: 'none',
                backgroundColor: '#0984e3'
            },
            {
                name: 'secondary',
                width: '80px',
                height: '30px',
                margin_left: '10px',
                padding: '2px',
                border: 'none',
                backgroundColor: '#b2bec3'
            },
            {
                name: 'success',
                width: '80px',
                height: '30px',
                margin_left: '10px',
                padding: '2px',
                border: 'none',
                backgroundColor: '#00b894'
            },
        ]

    },
    {
        id: 3,
        name: 'Card',
        path: 'card',
        //element: <Card/>,
        style: [
            {
                width: '300px',
                height: {
                    card_height: '350px',
                    img_height: '250px',
                },

                border: {
                    card_border: '1px solid black',
                    img_border: '1px solid black'
                },
            }
        ]
    },
    {
        id: 4,
        name: 'Dropdown',
        path: 'dropdown',
        //element: <Dropdown/>,
    },
    {
        id: 5,
        name: 'Figure',
        path: 'figure',
        //element: <Figure/>,
        style: [
            {
                width: '250px',
                height: '300px',
                border: '1px solid black'
            }
        ]
    },
    {
        id: 6,
        name: 'Pagination',
        path: 'pagination',
        //element: <Pagination/>,
        next_prev: [
            {
                type: '❮',
                color: "black",
                float: 'left',
                padding: '8px 16px',
                border: '1px solid black',
                display: 'inline-block'
            },
            {
                type: '❯',
                color: "black",
                float: 'left',
                padding: '8px 16px',
                border: '1px solid black',
                display: 'inline-block'
            }
        ],
        simple: [
            {
                type: '❮;',
                color: 'black',
                float: 'left',
                padding: '8px 16px',
                display: 'inline-block',
                border: '1px solid black',
            },
            {
                type: '1',
                color: 'black',
                float: 'left',
                padding: '8px 16px',
                display: 'inline-block',
                border: '1px solid black',
            },
            {
                type: '2',
                color: 'black',
                float: 'left',
                padding: '8px 16px',
                display: 'inline-block',
                border: '1px solid black',
            },
            {
                type: '3',
                color: 'black',
                float: 'left',
                padding: '8px 16px',
                display: 'inline-block',
                border: '1px solid black',
            },
            {
                type: '❯',
                color: 'black',
                float: 'left',
                padding: '8px 16px',
                display: 'inline-block',
                border: '1px solid black',
            },
]
    },
    {
        id: 7,
        name: 'Heading',
        path: 'heading',
        style: [
            {
                type: 'h1',
            },
            {
                type: 'h2',
            },
            {
                type: 'h3',
            },
            {
                type: 'h4',
            },
            {
                type: 'h5',
            },
            {
                type: 'h6',
            },
        ]
    },
    {
        id: 8,
        name: 'List',
        path: 'list',
        style: [
            {
                type: 'ul',
                text: 'Unorderd'
            },
            {
                type: 'ol',
                text: 'Orderd'
            },
        ]
    }
]