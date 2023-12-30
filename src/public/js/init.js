const bookUrl = 'https://www.googleapis.com/books/v1/volumes'
// /const apiKey = 'AIzaSyDRVbEmQEX6he8WwVQYgRLbtwr9gMPmRbM'


const loadingHtml = ' <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>'


//get book data
function getBook(subjectCard, tag, country, startIndex, maxResults) {
    axios.get(`${bookUrl}?q=subject:${tag}&orderBy=newest${startIndex ? `&startIndex=${startIndex}` : ''}${maxResults ? `&maxResults=${maxResults}` : ''}${country ? `&langRestrict=${country}` : ''} `)
        .then(res => {
            const loading = subjectCard.querySelector('.loading')
            const content = subjectCard.querySelector('.subject-content')
            console.log(res.data);
            const card = makeBookCard(res.data.items)
            content.removeChild(loading)
            content.appendChild(card)
        })
}

const filter = document.querySelector('#filterSelect')
const searchBtn = document.querySelector('#searchBtn')
const searchInput = document.querySelector('#searchInput')

// searchBtn.addEventListener('click', () => {
//     const value = searchInput.value
//     const name = filter.value
//     if (value.length == 0 || !value.replace(/\s/g, '').length) {
//         alert('Tìm kiếm không hợp lệ')
//         return
//     }
//     window.location = `search?${name}=${value}`
// })

// searchInput.addEventListener('keypress', (e) => {
//     if (e.key === "Enter") {
//         const value = searchInput.value
//         const name = filter.value
//         if (value.length == 0 || !value.replace(/\s/g, '').length) {
//             alert('Tìm kiếm không hợp lệ')
//             return
//         }
//         window.location = `search?${name}=${value}`
//     }
// })