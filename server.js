const express = require('express');
const app = express();

const mockUserData = [{
        name: 'Mark'
    },
    {
        name: 'Jill'
    }
]
app.get('/users', (request, response) => {
    response.json({
        success: true,
        message: 'Succesfully got users. Nice!',
        users: mockUserData
    })
});

app.get('/users/:id', (request, response) => {
    console.log(request.params.id)
    response.json({
        success: true,
        message: 'We got 1 user!',
        user: request.params.id
    })
})

app.listen(8000, () => {
    console.log(`Server started on port 8K`);
});