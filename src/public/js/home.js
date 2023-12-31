

//get book data
function getBook(subjectCard, tag) {
    axios.get(`${bookUrl}?q=subject:${tag}&maxResults=10`)
        .then(res => {
            const loading = subjectCard.querySelector('.loading')
            const content = subjectCard.querySelector('.subject-content')

            let fragment = new DocumentFragment();

            res.data.items.forEach(book => {
                const b = makeBookCard(book)
                fragment.appendChild(b)
            })

            const card = document.createElement('div')
            card.classList.add('list-book')
            card.append(fragment)

            content.removeChild(loading)
            content.appendChild(card)
        })
}

window.addEventListener('load', () => {
    const educationCard = document.querySelector('#education')
    const novelCard = document.querySelector('#novels')
    const mangaCard = document.querySelector('#manga')
    const cookingCard = document.querySelector('#cooking')
    const travelCard = document.querySelector('#travel')
    getBook(educationCard, 'education')
    getBook(novelCard, 'novel')
    getBook(mangaCard, 'comics',)
    getBook(cookingCard, 'cooking')
    getBook(travelCard, 'travel')
})



const searchBtn = document.querySelector('#searchBtn')
const searchInput = document.querySelector('#searchInput')



searchBtn.addEventListener('click', () => {
    const value = searchInput.value
    const filter = document.querySelector('input[name="filter"]:checked').value;
    if (value.length == 0 || !value.replace(/\s/g, '').length) {
        alert('Tìm kiếm không hợp lệ')
        return
    }
    window.location = `filter?${filter}=${value}`
})

searchInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        const value = searchInput.value
        const filter = document.querySelector('input[name="filter"]:checked').value;
        if (value.length == 0 || !value.replace(/\s/g, '').length) {
            alert('Tìm kiếm không hợp lệ')
            return
        }
        window.location = `filter?${filter}=${value}`
    }
})
