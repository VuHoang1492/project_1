const body = document.querySelector('body')


//toggle change theme
const toggleSwitch = document.querySelector('.toggle-switch')
const mode = document.querySelector('.mode')
const modeText = mode.querySelector('span')


//toggle siderbar
const toggleSiderbar = document.querySelector('.toggle')
const sider = document.querySelector('.sider')
const wrap = document.querySelector('.wrap')

//set theme
let theme = localStorage.getItem('theme') || 'light'

if (theme === 'light') {
    modeText.innerText = 'LIGHT MODE'
} else {
    body.classList.toggle('dark')
    modeText.innerText = 'DARK MODE'
}


mode.addEventListener('click', () => {
    body.classList.toggle('dark')
    if (theme == 'light') {
        theme = 'dark'
        localStorage.setItem('theme', 'dark')
        modeText.innerText = 'DARK MODE'
    } else {
        theme = 'light'
        localStorage.setItem('theme', 'light')
        modeText.innerText = 'LIGHT MODE'
    }
})

//set sierbar
toggleSiderbar.addEventListener('click', () => {
    sider.classList.toggle('close')
    wrap.classList.toggle('expand')
})



//generate gradient color
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