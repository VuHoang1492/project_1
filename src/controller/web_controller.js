import ISO6391 from 'iso-639-1'
import bookService from "../service/book_service";

const homeController = (req, res) => {
    res.render('pages/index');
}
const bookDetailController = (req, res) => {
    const bookId = req.query.id
    if (bookId) {
        bookService.getBookById(bookId).then(response => {
            response.data.volumeInfo.language = ISO6391.getName(response.data.volumeInfo.language)
            console.log(response.data.saleInfo);
            res.render('pages/book_detail', { book: response.data })
        }).catch(err => {
            if (err.code == 'ERR_BAD_RESPONSE')
                res.render('pages/error', { mes: 'KHÔNG TÌM THẤY MÃ SÁCH NÀY' })
        })
    } else {
        res.render('pages/error', { mes: 'URL KHÔNG HỢP LỆ' })
    }
}

export default { homeController, bookDetailController }