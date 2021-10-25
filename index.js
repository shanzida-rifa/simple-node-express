const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello from my second node  excitec me  to learn and express ok ok');

});

const users = [
    { id: 0, name: "Shabana", email: "shabana@gmail.com", phone: "01788888888" },
    { id: 1, name: "Shahana", email: "Shahan@gmail.com", phone: "01788888888" },
    { id: 2, name: "Sraboni", email: "Sraboni@gmail.com", phone: "01788888888" },
    { id: 3, name: "Shuchosmi", email: "Shuchosmi@gmail.com", phone: "01788888888" },
    { id: 4, name: "Soniya", email: "Soniya@gmail.com", phone: "01788888888" },
    { id: 5, name: "Shusmita", email: "Shusmita@gmail.com", phone: "01788888888" }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchReasult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchReasult);
    }
    else {
        res.send(users)

    }
});

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post ', req.body)
    // res.send('post got hitted')
    res.json(newUser)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits/mango/fazlee', (req, res) => {
    res.send('Yummy Yummy tok marka fazlee');
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple'])
})

app.listen(port, () => {
    console.log('listening to port', port);
})