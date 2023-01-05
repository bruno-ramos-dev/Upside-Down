// import subscribeToHellfireClub from './firebase/hellfire-club.js'

const playThemeSong = () => {
    const guitar = document.getElementById('guitar')
    guitar.addEventListener('click', () => {
        const audio = document.getElementById('music')
        audio.play()
        audio.volume = 0.2
    })
}

const switchTheme = () => {
    document.body.classList.toggle('dark-theme')
    document.body.classList.toggle('light-theme')

    const theme = document.body.classList[0]
    const music = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg'

    const audio = document.getElementById('music')
    audio.src = `src/assets/musics/${music}`
    audio.play()
    audio.volume = 0.2
}

playThemeSong();

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')
const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value, 
        email: txtEmail.value, 
        level: txtLevel.value, 
        character: txtCharacter.value
    }

    // const subscriptionId = await subscribeToHellfireClub(subscription)
    // console.log(subscriptionId);

    console.log(subscription);
})