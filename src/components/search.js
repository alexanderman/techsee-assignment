import React, { useState } from 'react';
import { TextField, Container, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    container: {
        display: 'flex',
        marginBottom: '2rem',
    },
    leftColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    rightColumn: {
        flex: 1
    },
    inputLine: {
        marginBottom: '.5rem',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    label: {
        fontSize: '1.2rem',
        marginBottom: '.5rem'
    },
    input: {
        fontSize: '1.2rem',
        padding: '.5rem .5rem',
        outline: 0,
        border: 'solid 1px #AAAAAA',
        borderRadius: '.3rem',
        marginLeft: '.5rem',
        width: '350px'
    },
    input_err: {
        borderColor: '#CC0000'
    },
    button: {
        width: '369px'
    }
});

function isTextValid(text) {
    return text.length >= 2 && text.length <= 12;
}

export default ({ onSearch }) => {
    const classes = useStyles();
    const [text, setText] = useState('');
    const [hasError, setHasError] = useState(false);
    const inputClasses = hasError ? `${classes.input} ${classes.input_err}` : classes.input;
    const buttonDisabled = !isTextValid(text);

    const onInputChange = e => {
        setText(e.target.value);
        setHasError(!isTextValid(e.target.value));
    }

    const clickHandler = () => {
        if (!hasError && onSearch) {
            onSearch(text);
        }
    }

    return (
        <Box className={classes.container}>
            <Box className={classes.leftColumn}>

                <Box className={classes.inputLine}>
                    <label className={classes.label} htmlFor="search_inp">Tester Name</label>
                    <input type="text" id="search_inp" 
                        placeholder="Enter the tester name" 
                        onChange={onInputChange}
                        className={inputClasses}>
                    </input>
                </Box>

                <Button variant="contained" 
                    disabled={buttonDisabled} 
                    color="primary" className={classes.button} 
                    onClick={clickHandler}>Fetch
                </Button>

            </Box>
            <Box className={classes.rightColumn}></Box>
        </Box>
    );
}