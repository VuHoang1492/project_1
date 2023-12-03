import express from 'express'
import webController from '../controller/web_controller'

const route = express.Router()


route.get('/', (req, res) => {
    res.redirect('/home')
})
route.get('/home', webController.homeController)
route.get('/book', webController.bookDetailController)


export default route