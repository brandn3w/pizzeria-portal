import React from 'react';
import styles from '../Dashboard/Dashboard.module.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tables from '../Tables/Tables';
import Waiter from '../Waiter/WaiterContainer';


const Dashboard = () => {

    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Typography className={styles.header} variant="h5">
                        {'Orders:'}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Waiter />
            <div className={styles.tables}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography className={styles.header} variant="h5">
                            {'Existing events:'}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Tables />
            </div>
        </div>
    );
}
export default Dashboard;