//integreting it using fetch Api..//

const get_location = function () {
    return fetch('https://ipinfo.io/json?token=2dd6ca33a344b4', {}).then((response) => {
        if (response.status === 200) {
            return response.json()
        }
        else {
            throw ('An error occured')
        }
    })
}

get_location().then((value) => {
    console.log(`${value.city} ,${value.region},${value.country}`)
}).catch((error) => {
    console.log(error)
})


