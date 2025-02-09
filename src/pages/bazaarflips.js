import '../App.css';

// React
import React, { Component } from 'react';

// MUI
import { withStyles } from '@material-ui/core/styles';
import theme from '../util/theme';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';

// axios
import axios from 'axios';

const styles = {
  ...theme.spreadIt,
  wrapper: {
    width: '98%',
    overflow: 'hidden',
    paddingTop: '2%',
    paddingLeft: '2%',
    paddingBottom: '2%',
  },
  cardHolder: {
    float: 'left',
    width: '49%',
    fontSize: '25px',
    display: 'inline-block',
  },
  notes: {
    width: '48%',
    paddingLeft: '1%',
    fontSize: '20px',
    display: 'inline-block',
    overflow: 'hidden',
  },
};

class BazaarFlips extends Component {
  state = {
    order: [[], []],
    items: {},
    names: {},
    sortPercent: true,
  };

  componentDidMount() {
    axios
      .get('https://skyblockflips-api.asra.repl.co/bazaar/margins')
      .then((res) => {
        this.setState({
          ...this.state,
          order: [res.data.sorted, res.data.sortedValue],
          items: res.data.items,
        });
      });

    axios
      .get('https://skyblockflips-api.asra.repl.co/bazaar/names')
      .then((res) => {
        this.setState({
          ...this.state,
          names: res.data,
        });
      });
  }

  interval = setInterval(() => {
    axios
      .get('https://skyblockflips-api.asra.repl.co/bazaar/margins')
      .then((res) => {
        this.setState({
          ...this.state,
          order: [res.data.sorted, res.data.sortedValue],
          items: res.data.items,
        });
      });
  }, 5000);

  handleChange = (event) => {
    this.setState({
      ...this.state,
      sortPercent: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <div className={classes.wrapper}>
            <div className={classes.cardHolder}>
                Sort with:
              <Select
                value={this.state.sortPercent}
                onChange={this.handleChange}
                inputProps={{
                  name: 'Sort with',
                  id: 'age-native-label-placeholder',
                }}
                fullWidth
                style={{ marginBottom: '5%', color: 'white' }}
              >
                <option value={true}>Margin as Percent</option>
                <option value={false}>Margin as Value</option>
              </Select>
              <TableContainer component={Paper}>
                <Table
                  className={classes.table}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tableItem}>
                        <b>Item Name</b>
                      </TableCell>
                      <TableCell align="right" className={classes.tableItem}>
                        <b>Margin</b>
                      </TableCell>
                      <TableCell align="right" className={classes.tableItem}>
                        <b>Buy Price</b>
                      </TableCell>
                      <TableCell align="right" className={classes.tableItem}>
                        <b>Sell Price</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.order[this.state.sortPercent ? 0 : 1].map(
                      (e, i) => (
                        <TableRow key={i + 1} hover>
                          <TableCell
                            component="th"
                            scope="row"
                            className={classes.tableItem}
                          >
                            <a
                              href={'/#/itemview/' + e}
                              className={classes.link}
                            >
                              {this.state.names[e] === undefined ? (
                                <span style={{ color: 'orange' }}>
                                  {e
                                    .replace(/_/g, ' ')
                                    .replace(/\S*/g, function (word) {
                                      return (
                                        word.charAt(0) +
                                        word.slice(1).toLowerCase()
                                      );
                                    })}
                                </span>
                              ) : (
                                this.state.names[e]
                              )}
                            </a>
                          </TableCell>
                          <TableCell
                            align="right"
                            className={classes.tableItem}
                          >
                            {
                              <span
                                style={{
                                  color:
                                    (this.state.sortPercent
                                      ? this.state.items[e].margin
                                      : this.state.items[e].pureMargin) > 0
                                      ? '#00ff00'
                                      : (this.state.sortPercent
                                          ? this.state.items[e].margin
                                          : this.state.items[e].pureMargin) ===
                                        0
                                      ? 'grey'
                                      : '#ff0000',
                                }}
                              >
                                {((this.state.sortPercent
                                  ? this.state.items[e].margin
                                  : this.state.items[e].pureMargin) >= 0
                                  ? '+'
                                  : '') +
                                  (this.state.sortPercent
                                    ? Math.round(
                                        this.state.items[e].margin * 10000
                                      ) / 100
                                    : this.state.items[e].pureMargin
                                  )
                                    .toFixed(1)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
                                  (this.state.sortPercent ? '%' : '')}
                              </span>
                            }
                          </TableCell>
                          <TableCell
                            align="right"
                            className={classes.tableItem}
                          >
                            {this.state.items[e].buyOffer
                              .toFixed(1)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          </TableCell>
                          <TableCell
                            align="right"
                            className={classes.tableItem}
                          >
                            {this.state.items[e].sellOffer
                              .toFixed(1)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          </TableCell>
                        </TableRow>
                      )
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className={classes.notes}>
              <h1>Bazaar Flips</h1>
              <p style={{ textAlign: 'left' }}>
                Bazaar flipping is when you purchase an item from the bazaar
                using a buy order then sell it with a sell order to make a
                profit, this calculates and displays margins for all of the
                items in the bazaar and ranks them to make it easier to flip
                them. <br /> <br />
                Please note that the margins are adjusted to add 0.1 coins to
                the buy price and subtract 0.1 coins from the sell price before
                calculating as this is how most of the sell and buy offers are
                made. <br /> <br />
                This also only updates every 5 seconds to not max out the
                hypixel api. <br /> <br />
                Click on an item name to see more info about it!
              </p>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(BazaarFlips);
