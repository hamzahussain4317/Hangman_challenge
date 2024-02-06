class Hangman {
    constructor(word, RemainingGuess) {
        this.word = word.toLowerCase().split('')
        this.RemainingGuess = RemainingGuess
        this.guessletters = []
        this.status = 'playing'
    }
    get_puzzle() {

        let hidded_word = ''
        this.word.forEach((item, index) => {
            if (item === ' ' || this.guessletters.includes(item)) {
                hidded_word += item
            }
            else {
                hidded_word += '_ '
            }
        })
        return hidded_word
    }

    Make_a_guess(guess_letter) {
        guess_letter = guess_letter.toLowerCase()
        let is_this_already_exist = this.guessletters.includes(guess_letter)
        let is_this_a_bad_guess = this.word.includes(guess_letter)
        if (!is_this_already_exist) {
            this.guessletters.push(guess_letter)
        }
        if (!is_this_a_bad_guess) {
            this.RemainingGuess--
        }
        return this.get_puzzle()
    }

    tell_status() {
        const check_word = this.get_puzzle()
        if (!check_word.includes('_ ')) {
            this.status = 'finished'
        }
        else if (this.RemainingGuess === 0) {
            this.status = 'failed'
        }
    }

    displayStatus() {
        if (this.status === 'playing') {
            return `Guess Left: ${this.RemainingGuess}`
        }
        else if (this.status === 'failed') {
            return `Nice try! The word was ${this.word.join('')}`
        }
        else if (this.status === 'finished') {
            return `Great work! You Guessed the word`
        }
    }
}
const write_on_browser = function (conetnt, id, type) {
    const newitem = document.createElement(type)
    newitem.textContent = conetnt
    document.querySelector(id).appendChild(newitem)
}