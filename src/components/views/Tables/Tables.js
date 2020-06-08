import React from 'react';
//import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';


const Tables = () => (

    <div>
        <h2>Tables View</h2>
  
    <div>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/123abc`} activeClassName="active">
            Tables/booking/123abc
            </Link>
    </div>
    <div>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName="active">
            Tables/booking/new
      </Link>
    </div>
    </div>
    )


export default Tables;