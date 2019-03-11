import React from 'react'
import menuitems from '../menu'
import { Link } from 'react-router-dom';

const cmp:React.SFC = () => <>
    <ul>
        {menuitems.map((item, index) =>
            <li key={index}>
                <Link to={`/${item.url}`}>{item.caption}</Link>
            </li>  
        )}
    </ul>
</>

export default cmp    