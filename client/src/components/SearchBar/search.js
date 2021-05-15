import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import {  Container } from '@material-ui/core';
import useStyles from './styles';
import './style.css'

const Search = () => {
    const classes = useStyles();

    return (
        
            <Container className={classes.container} maxWidth="xs">
                <input className={classes.input} type="text" placeholder="Enter your quote"></input>
                <SearchIcon color="inherit" />
            </Container>
        
    )
}

export default Search;