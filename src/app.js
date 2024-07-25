

const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.set('view engine', 'hbs');

const path = require("path")
const viewsDirectory = path.join(__dirname, '../temp1/views')
app.set('views', viewsDirectory);


var hbs = require('hbs');
const partialsPath = path.join(__dirname, "../Temp1/partials")
hbs.registerPartials(partialsPath)


app.get('/', (req, res) => {
    res.render('index', {
        title: "HOME",
        desc: "This is home page"
    })
})

app.get('/service', (req, res) => {
    res.render('service', {
        title: "SERVICE",
        name: "Mohamed",
        city: "Cairo",
        age: 40,
        img1: "images/trainer-3.jpg"
    })
})


app.get('/team', (req, res) => {
    res.render('team', {
        title: "TEAM",
        name: "reem",
        city: "mansoura",
        age: 25,
        img2: "images/trainer-2.jpg"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})




