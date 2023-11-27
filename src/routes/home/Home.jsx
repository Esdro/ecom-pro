
import Directory from '../../components/directory/directory.component.jsx';
import {Outlet} from "react-router-dom";
import React from "react";
function Home() {
    const categories = [
        {
            id: 0,
            title: 'Hats '
        },
        {
            id: 4,
            title: 'Dem dem '
        },
        {
            id: 3,
            title: 'Womens'
        },
        {
            id: 1,
            title: 'Mens  '
        },
        {
            id: 2,
            title: 'Adiddas '
        }
    ]
    return (
        <>
            <Outlet/>
            <Directory categories={categories} />
        </>
    );
}

export default Home;
