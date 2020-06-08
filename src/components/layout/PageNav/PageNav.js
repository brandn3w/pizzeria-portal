import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.module.scss';

const PageNav=()=>(
   
        <nav className={styles.component}>
            <NavLink exact to={`${process.env.PUBLIC_URL}/`} className ={styles.link} activeClassName='active'>Homepage</NavLink>
            <NavLink exact to={`${process.env.PUBLIC_URL}/login`} className ={styles.link} activeClassName='active'>Login</NavLink>
            <NavLink exact to={`${process.env.PUBLIC_URL}/tables`} className ={styles.link} activeClassName='active'>Tables</NavLink>
            <NavLink exact to={`${process.env.PUBLIC_URL}/waiter`} className ={styles.link} activeClassName='active'>Waiter</NavLink>
            <NavLink exact to={`${process.env.PUBLIC_URL}/kitchen`} className ={styles.link} activeClassName='active'>Kitchen</NavLink>
            
        </nav>
)
export default PageNav;