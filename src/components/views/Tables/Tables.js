import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';



const Tables = () => (

    <div classname={styles.component}>
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
        <div>
            <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName="active">
                Tables/events/new
      </Link>
            <div>
                <Link to={`${process.env.PUBLIC_URL}/tables/events/123abc`} activeClassName="active">
                    Tables/booking/new
      </Link>
            </div>
        </div>
    </div>
)


export default Tables;