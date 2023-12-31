let type = document.getElementsByName('type')[0].content;
let param = document.getElementsByName('param')[0].content



const listBook = document.querySelector('.list-book')
const loading = listBook.querySelector('.loading')


let currentPage = 1

function getBook(type, param, page) {
    axios.get(`${bookUrl}?q=${type}:${param}&startIndex=${(page - 1) * 9}&maxResults=9`)
        .then(res => {
            console.log(res);
            let fragment = new DocumentFragment();
            res.data.items.forEach(book => {
                const card = makeBookCard(book)
                fragment.appendChild(card)
            })

            listBook.removeChild(loading)
            listBook.appendChild(fragment)
            currentPage++
        })
}




const wrapScroll = document.querySelector('.wrap')
wrapScroll.addEventListener('scroll', () => {

    if (wrapScroll.scrollTop + wrapScroll.clientHeight + 1 >= wrapScroll.scrollHeight) {
        console.log('end');
        listBook.appendChild(loading)
        getBook(type, param, currentPage)

    }
})

getBook(type, param, 1)