import path from 'path'

const configViewEngine = (app) => {
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../views'))
}

export default configViewEngine