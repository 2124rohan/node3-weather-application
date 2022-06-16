// const request = require('request')

// const forecast = (latitude, longtitude, callback) => {
//     const url = 'https://api.pirateweather.net/forecast/wi6rJQAP1Y9G4i7gQly7l2q3PZs68VPR1Sq2A3zf/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longtitude) + '?&units=ca'

//     request({ url, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } else if (response.body.error) {
//             callback('Unable to find location!', undefined)
//         } else {
//             // const response = {
//             //     summary : response.body.currently.summary,
//             //     temperature  : response.body.currently.temperature,
//             //     precipProbability : response.body.currently.precipProbability,
//             // }


//             callback(undefined, response.body.currently.summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + ' % chance of rain.')
//         }
//     })
// }












const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = 'https://api.pirateweather.net/forecast/wi6rJQAP1Y9G4i7gQly7l2q3PZs68VPR1Sq2A3zf/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longtitude) + '?&units=ca'

    request({ url, json: true }, (error, {body}={}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            // const response = {
            //     summary : response.body.currently.summary,
            //     temperature  : response.body.currently.temperature,
            //     precipProbability : response.body.currently.precipProbability,
            // }


            callback(undefined, body.currently.summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + ' % chance of rain. And Todays Humidity is '+ body.currently.humidity)
        }
    })
}


module.exports = forecast
