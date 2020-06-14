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
import { DatePicker } from '../../common/DatePicker/DatePicker';

const demoData = [
  {
    hour: '13:00',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '13:30',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'event' },
      { id: 3, status: 'free' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '14:00',
    tables: [
      { id: 1, status: 'event' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '14:30',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'free' },
      { id: 3, status: 'free' },
      { id: 4, status: 'event' },
    ],
  },
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <div>
          <div>
            <Button component={Link} variant="contained" color="secondary" to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
              New Booking
    </Button>
          </div>
          <div>
            <Button component={Link} variant="contained" color="secondary" to={`${process.env.PUBLIC_URL}/tables/events/new`}>
              New Event
            </Button>
          </div>
        </div>
      );
    case 'booked':
      return (
        <div className={styles.center}>
          <div>
            <Button component={Link} variant="contained" color="secondary" to={`${process.env.PUBLIC_URL}/tables/booking/123abc`}>
              Booking
    </Button>
          </div>

        </div>
      );
    case 'event':
      return (
        <div>
          <Button component={Link} variant="contained" color="secondary" to={`${process.env.PUBLIC_URL}/tables/event/123abc`}>
            Existing event
        </Button>
        </div>
      );
    default:
      return null;
  }
};
const Tables = () => (

  <Paper className={styles.component}>
    <DatePicker />
    <Table>
      <TableHead>
        <TableRow>
          <TableCell className={styles.hour}>Hour:</TableCell>
          <TableCell className={styles.tableHead}>Table 1</TableCell>
          <TableCell className={styles.tableHead}>Table 2</TableCell>
          <TableCell className={styles.tableHead}>Table 3</TableCell>
          <TableCell className={styles.tableHead}>Table 4</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoData.map(row => (
          <TableRow key={row.hour}>
            <TableCell component="th" scope="row" className={styles.hour}>
              {row.hour}
            </TableCell>
            {row.tables.map(table => (
              <TableCell key={table.id}>{renderActions(table.status)}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);



export default Tables;