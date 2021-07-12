document.addEventListener("DOMContentLoaded", async () => {
    const bodyDOM = document.querySelector('.theme')
    const buttonDOM = document.querySelector('.button')

    bodyDOM.classList.add('dark-theme')

    buttonDOM.addEventListener('click', () => {
        if (bodyDOM.classList.contains('dark-theme')) {
            bodyDOM.classList.remove('dark-theme')
            bodyDOM.classList.add('light-theme')
        } else if (bodyDOM.classList.contains('light-theme')) {
            bodyDOM.classList.remove('light-theme')
            bodyDOM.classList.add('dark-theme')
        }
    })
});