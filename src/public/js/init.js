const bookUrl = 'https://www.googleapis.com/books/v1/volumes'
// /const apiKey = 'AIzaSyDRVbEmQEX6he8WwVQYgRLbtwr9gMPmRbM'


const loadingHtml = ' <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>'


//make book
const makeBookCard = (book) => {

    const gradient = generateGradientRamdom()
    const bookDiv = document.createElement('div')
    bookDiv.classList.add('book')
    bookDiv.id = book.id
    bookDiv.style.background = gradient


    const img = document.createElement('img')
    if (book.volumeInfo.imageLinks != undefined)
        img.src = book.volumeInfo.imageLinks.smallThumbnail
    else {
        img.alt = 'No Thumnail'
        img.src = '/image/no_cover_thumb.gif'
    }
    img.classList.add('thumnail')
    bookDiv.appendChild(img)


    const infoDiv = document.createElement('div')
    infoDiv.classList.add('book-info')

    const nameDiv = document.createElement('div')
    nameDiv.classList.add('book-name')
    const name = document.createElement('span')
    name.innerText = book.volumeInfo.title
    nameDiv.appendChild(name)
    infoDiv.appendChild(nameDiv)



    const authorDiv = document.createElement('div')
    authorDiv.classList.add('author-name')
    const author = document.createElement('span')
    author.innerText = book.volumeInfo.authors
    authorDiv.appendChild(author)
    infoDiv.appendChild(authorDiv)



    const detail = document.createElement('a')
    detail.href = `/book?id=${book.id}`
    detail.classList.add('detail')
    detail.innerText = 'Chi tiết >>'
    infoDiv.appendChild(detail)

    bookDiv.appendChild(infoDiv)

    return bookDiv
}


