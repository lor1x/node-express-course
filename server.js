const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mockUserData = [{
        name: 'Mark'
    },
    {
        name: 'Jill'
    }
];

app.get('/users', (request, response) => {
    response.json({
        success: true,
        message: 'Succesfully got users. Nice!',
        users: mockUserData
    });
});

app.get('/users/:id', (request, response) => {
    console.log(request.params.id)
    response.json({
        success: true,
        message: 'We got 1 user!',
        user: request.params.id
    });
});

app.post('/login', (request, response) => {
    const username = request.body.username;
    const password = request.body.password;

    const mockUsername = 'billyTheKid';
    const mockPassword = 'superSikrit';

    if (username === mockUsername && password === mockPassword) {
        response.json({
            success: true,
            message: 'User succesfully logged in.'
        });
    } else {
        response.json({
            success: false,
            message: 'Username and passowrd don' / 't match.',
            token: 'Encrypted token goes here'
        })
    }
});

app.listen(8000, () => {
    console.log(`Server started on port 8K`);
});