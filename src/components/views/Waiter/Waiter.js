import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Waiter.module.scss';


function Waiter() {
    return (
        <div className={styles.component}>
            <h2>Waiter View</h2>

            <div>
                <Link to={`${process.env.PUBLIC_URL}/waiter/order/123abc`} activeClassName="active">
                    waiter/order/123abc
            </Link>
            </div>
            <div>
                <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`} activeClassName="active">
                    Waiter/order/new
      </Link>
            </div>
        </div>
    )
}

export default Waiter;