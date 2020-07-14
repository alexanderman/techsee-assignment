import React, { useState } from 'react';
import './App.scss';
import Table from './components/table';
import Search from './components/search';
import Error from './components/error';
import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const MOCK_DATA = [{"firstName":"Melisa","lastName":"Kadosh","country":"Israel","device":"iPhone 6","bugs":[{"id":1,"title":"button misplaced"},{"id":4,"title":"incorrect home page"}]},{"firstName":"Lynda","lastName":"Golumb","country":"New Zealand","device":"Huawei P10","bugs":[{"id":2,"title":"device is stuck"},{"id":3,"title":"can't load application"},{"id":5,"title":"no input validation"}]},{"firstName":"Artem","lastName":"Puzailov","country":"Ukraine","device":"Galaxy S7","bugs":[{"id":7,"title":"Chrome displays jibberish"}]},{"firstName":"Rob","lastName":"Rabbi","country":"UK","device":"Xiomi Note 5","bugs":[{"id":11,"title":"invalid text"},{"id":21,"title":"shifted display"},{"id":13,"title":"mis aligned buttons"},{"id":15,"title":"server crash"}]},{"firstName":"Neved","lastName":"Dorsell","country":"Sweden","device":"Nokia D56","bugs":[{"id":13,"title":"slow loading"},{"id":16,"title":"pixeled video"}]},{"firstName":"Silvi","lastName":"Rushfeld","country":"Germany","device":"LG G5","bugs":[{"id":11,"title":"blank end page"}]},{"firstName":"Will","lastName":"Debill","country":"US","device":"iPhone X","bugs":[{"id":11,"title":"login stuck"},{"id":21,"title":"shifted display"}]}].sort((a, b) => a.firstName < b.firstName ? -1 : 1);
const API_URL = 'https://test-api.techsee.me/api/ex/';

const useStyles = makeStyles({
    container: {
        
    },
    title: {
        marginBottom: '1rem'
    }
});

function App() {
    const classes = useStyles();
    const [hasError, setHasError] = useState(false);
    const [data, setData] = useState(MOCK_DATA);

    const prepareAndSetData = (data = []) => {
        data.sort((a, b) => a.firstName < b.firstName ? -1 : 1)
        setData(data);
    }

    const search = testerName => {
        fetch(`${API_URL}${testerName}`)
        .then(response => {
            if (!response.ok) {
                return Promise.reject();
            }
            return response.json();
        })
        .then(prepareAndSetData)
        .catch(err => {
            console.error(err);
            prepareAndSetData([]);
            setHasError(true);
        });
    }

    return (
    <div className="App">
        <Container className={classes.container}>
            <Typography variant="h4" className={classes.title}>Search Bugs</Typography>
            <Search onSearch={search} />
            { hasError &&  <Error /> }
            <Table data={data} />
        </Container>
    </div>
    );
}

export default App;
