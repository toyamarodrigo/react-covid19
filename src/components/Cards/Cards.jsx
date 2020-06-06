import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({
  data: {
    TotalConfirmed,
    TotalDeaths,
    TotalRecovered,
    NewConfirmed,
    NewDeaths,
    NewRecovered,
    lastUpdate,
  },
}) => {
  if (!TotalConfirmed) {
    return 'Loading...';
  }
  return (
    <div className={styles.container}>
      <Typography variant="h3" className={styles.subtitle}>
        COVID-19
      </Typography>
      <Grid container spacing={5} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={TotalConfirmed}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography variant="body2">
            Today 
              <CountUp
                start={0}
                end={NewConfirmed}
                duration={2.5}
                separator=","
                prefix=" +"
                className={styles.new_infected}
              />
            </Typography>
            <Typography variant="body2">Active cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={TotalRecovered}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography variant="body2">
            Today
              <CountUp
                start={0}
                end={NewRecovered}
                duration={2.5}
                separator=","
                prefix=" +"
                className={styles.new_infected}
              />
            </Typography>
            <Typography variant="body2">Recoveries from COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={TotalDeaths}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography variant="body2">
            Today
              <CountUp
                start={0}
                end={NewDeaths}
                duration={2.5}
                separator=","
                prefix=" +"
                className={styles.new_infected}
              />
            </Typography>
            <Typography variant="body2">Deaths caused by COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography color="textSecondary" className={styles.lastUpdate}>
            Last Update: {new Date(lastUpdate).toDateString()}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
