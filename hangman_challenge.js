const game1 = new Hangman('cat', 2,)
const game2 = new Hangman('New Jersey', 6,)
this.document.querySelector('#Hangman').innerHTML = ''
write_on_browser(game2.get_puzzle(), '#Hangman', 'h1')
write_on_browser(game2.displayStatus(), '#Hangman', 'p')
window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    const finalans = game2.Make_a_guess(guess)
    game2.tell_status()
    game2.displayStatus()
    this.document.querySelector('#Hangman').innerHTML = ''
    write_on_browser(`${finalans}`, '#Hangman', 'h1')
    write_on_browser(game2.displayStatus(), '#Hangman', 'p')
})

//HTTP request bring data using a third party//

const request = new XMLHttpRequest()

request.open('GET', 'https://puzzle.mead.io/puzzle')
request.send()

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4) {
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    }
})




