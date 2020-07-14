import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        marginBottom: '2rem',
        color: '#CC0000'
    }
});

export default () => {
    const classes = useStyles();
    return (
        <Typography variant="subtitle1" className={classes.container} align="left">Temporary error occurred, please try again later</Typography>
    );
}