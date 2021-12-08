//Require the node-fetch module to use fetch
const fetch = require("node-fetch");

//Gets data
const getExample = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => {
        if (res.ok){
            return res.json();
        } else {
            console.log('failed');
        }
    })
    .then(data => displayData(data))
    .catch(err => console.log(err));
}

//Posts new data
const postExample = () => {
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    const settings = {
        method: 'POST',
        body: JSON.stringify({
            userId: 2,
            title: 'test',
            body: 'tester'
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(URL, settings)
    .then(res => {
        if (res.ok){
            return res.json();
        } else {
            console.log('error');
        }
    })
    .then(data => displayData(data))
    .catch(err => console.log(err))
}

//Updates data
const putExample = () => {
    const URL = 'https://jsonplaceholder.typicode.com/posts/1';
    const settings = {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            userId: 2,
            title: 'put',
            body: 'yooo'
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(URL, settings)
    .then(res => {
        if (res.ok){
            return res.json();
        } else {
            console.log(err);
        }
    })
    .then(data =>displayData(data))
    .catch(err => console.log(err))
}

//Deletes data
const deleteExample = () => {
    const URL = 'https://jsonplaceholder.typicode.com/posts/1';
    const settings = {
        method: 'DELETE'
    }
    fetch(URL, settings)
    .then(res=>{
        if (res.ok){
            return res.json();
        } else {
            console.log('error');
        }
    })
    .then(data=>displayData(data))
    .catch(err=>console.log(err))
}

//If using React, this could be a setState-related function
const displayData = (data) => {
    console.log(data);
}
