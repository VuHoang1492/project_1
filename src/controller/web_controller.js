import ISO6391 from 'iso-639-1'
import bookService from "../service/book_service";
import categories from '../data/category';

const homeController = (req, res) => {

    res.render('pages/index', { categories: categories });
}
const bookDetailController = (req, res) => {
    const bookId = req.query.id
    if (bookId) {
        bookService.getBookById(bookId).then(response => {
            response.data.volumeInfo.language = ISO6391.getName(response.data.volumeInfo.language)
            console.log(response.data.saleInfo);
            res.render('pages/book_detail', { book: response.data, categories: categories })
        }).catch(err => {
            if (err.code == 'ERR_BAD_RESPONSE')
                res.render('pages/error', { mes: 'KHÔNG TÌM THẤY MÃ SÁCH NÀY', categories: categories })
        })
    } else {
        res.render('pages/error', { mes: 'URL KHÔNG HỢP LỆ', categories: categories })
    }
}

const filterController = (req, res) => {
    const key = Object.keys(req.query)[0]
    if (['intitle', 'subject', 'inauthor', 'inpublisher'].includes(key)) {
        const value = req.query[key]
        res.render('pages/filter', { categories: categories, type: key, query: value })
    } else {
        res.render('pages/error', { mes: 'URL KHÔNG HỢP LỆ', categories: categories })
    }


}



export default { homeController, bookDetailController, filterController }