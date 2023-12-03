import axios from "axios"
require('dotenv').config()


const getBookById = (bookId) => {
    const url = process.env.BOOK_URL + `/${bookId}`;
    return axios.get(url)
}

export default { getBookById }