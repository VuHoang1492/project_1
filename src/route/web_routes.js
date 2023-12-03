import express from 'express'
import homeController from '../controller/home_controller'

const route = express.Router()


route.get('/', (req, res) => {
    res.redirect('/home')
})
route.get('/home', homeController)


export default route