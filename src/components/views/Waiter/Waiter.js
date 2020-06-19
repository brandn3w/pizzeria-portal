import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.node,
    }),
  }


  // its called one is ready for render.
  componentDidMount() {
    const { fetchTables } = this.props;
    //If waiter is called but not defined dont call fetchTables action.
    fetchTables && fetchTables();
  }

  renderActions(status) {
    switch (status) {
      case 'free':
        return (
          <>
            <Button>thinking</Button>
            <Button>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button>new order</Button>
        );
      case 'ordered':
        return (
          <Button>prepared</Button>
        );
      case 'prepared':
        return (
          <Button>delivered</Button>
        );
      case 'delivered':
        return (
          <Button>paid</Button>
        );
      case 'paid':
        return (
          <Button>free</Button>
        );
      default:
        return null;
    }
  };

  render() {
    console.log(this.props)
    const { loading, tables } = this.props;

    if (loading) {
      const { active, error } = loading;

      if (active || !tables.length) {
        return (
          <Paper className={styles.component}>
            <p>Loading...</p>
          </Paper>
        );
      } else if (error) {
        return (
          <Paper className={styles.component}>
            <p>Error! Details:</p>
            <pre>{error}</pre>
          </Paper>
        );
      } else {
        return (
          <Paper className={styles.component}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Table</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Order</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tables.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>
                      {row.status}
                    </TableCell>
                    <TableCell>
                      {row.order && (
                        <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                          {row.order}
                        </Button>
                      )}
                    </TableCell>
                    <TableCell>
                      {this.renderActions(row.status)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        );
      }
    }
    else {

      return null;
    }

  }
}

export default Waiter;