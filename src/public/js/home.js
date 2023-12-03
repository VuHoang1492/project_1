const educationCard = document.querySelector('#education')
const novelCard = document.querySelector('#novels')
const mangaCard = document.querySelector('#manga')
const cookingCard = document.querySelector('#cooking')
const travelCard = document.querySelector('#travel')


function getBook(subjectCard, tag, country, startIndex, maxResults) {
    axios.get(`${bookUrl}?q=subject:${tag}&orderBy=newest&maxResults=10${country ? '&langRestrict=country' : ''} `)
        .then(res => {
            const loading = subjectCard.querySelector('.loading')
            const content = subjectCard.querySelector('.subject-content')
            console.log(res.data);
            const card = makeBookCard(res.data.items)
            content.removeChild(loading)
            content.appendChild(card)
        })
}


const makeBookCard = (books) => {
    const card = document.createElement('div')
    card.classList.add('list-book')

    let fragment = new DocumentFragment();
    books.forEach(book => {

        const gradient = generateGradientRamdom()
        const bookDiv = document.createElement('div')
        bookDiv.classList.add('book')
        bookDiv.id = book.id
        bookDiv.style.background = gradient


        const img = document.createElement('img')
        if (book.volumeInfo.imageLinks != undefined)
            img.src = book.volumeInfo.imageLinks.smallThumbnail
        else img.alt = 'No Thumnail '
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
        detail.href = 'a'
        detail.classList.add('detail')
        detail.innerText = 'Detail'
        infoDiv.appendChild(detail)

        bookDiv.appendChild(infoDiv)

        fragment.appendChild(bookDiv)
    });

    card.appendChild(fragment)

    return card
}

getBook(educationCard, 'Education')
getBook(novelCard, 'Novel')
getBook(mangaCard, 'Manga', 'vn')
getBook(cookingCard, 'Cooking', 'vi')
getBook(travelCard, 'Travel')