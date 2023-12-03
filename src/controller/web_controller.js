const homeController = (req, res) => {
    res.render('pages/index');
}
const bookDetailController = (req, res) => {
    res.render('pages/not_found');
}

export default { homeController, bookDetailController }