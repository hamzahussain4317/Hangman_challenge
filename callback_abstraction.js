//callback method..//
const getpuzzle = (callback) => {
    const request = new XMLHttpRequest()

    request.open('GET', 'https://puzzle.mead.io/puzzle')
    request.send()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(data.puzzle, undefined)
        }
        else if (e.target.readyState === 4) {
            callback(undefined, `error occured`)
        }
    })
}
//callback method call//
getpuzzle((value, error) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log(value)
    }
})

//def promises method//
const getpuzzlepromise = (wordcount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        }
        else if (e.target.readyState === 4) {
            reject('An error has taken place')
        }
    })
    request.open('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordcount}`)
    request.send()

})

//call promises method//

getpuzzlepromise('2').then((puzzle) => {
    console.log(puzzle)
}, (error) => {
    console.log(error)
})

//fetch Api method..//

const getpuzzlefetch = (wordcount) => {
    return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordcount}`, {}).then((response) => {
        if (response.status === 200) {
            return response.json()
        }
        else {
            throw new Error('An error occured')
        }
    })

}
//call fetch api method//
getpuzzlefetch('2').then((data) => {
    console.log(data.puzzle)
}).catch((error) => {
    console.log(error)
})

//Now using Async await method..///
const getpuzzleawait = async (wordcount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordcount}`, {})
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    }
    else {
        throw new Error('An error occured')
    }
}
//calls await method..//
getpuzzleawait('2').then((ans) => {
    console.log(ans)
}).catch((error) => {
    console.log(error)
})