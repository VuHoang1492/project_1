const themesButton = document.querySelector('.change-theme')
const header = document.querySelector('.navbar')
const body = document.querySelector('.wrap')

let theme = localStorage.getItem('theme') || 'light'

if (theme === 'dark') {
    header.classList.add('dark')
    body.classList.add('dark')
    themesButton.classList.replace('bi-brightness-high-fill', 'bi-moon')

}


themesButton.addEventListener('click', () => {

    if (theme === 'light') {
        header.classList.add('dark')
        theme = 'dark'
        localStorage.setItem('theme', 'dark')
        themesButton.classList.replace('bi-brightness-high-fill', 'bi-moon')
        body.classList.add('dark')
    } else {
        themesButton.classList.replace('bi-moon', 'bi-brightness-high-fill')
        header.classList.remove('dark')
        body.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        theme = 'light'
    }
})




const generateGradientRamdom = () => {

    var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];

    function populate(a) {
        for (var i = 0; i < 6; i++) {
            var x = Math.round(Math.random() * 14);
            var y = hexValues[x];
            a += y;
        }
        return a;
    }

    return `linear-gradient(${populate('#')}80, rgba(0, 0, 0, 0))`
}