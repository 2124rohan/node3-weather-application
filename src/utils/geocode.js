// const request = require('request')
// const geoCode = (address,callback)=>{
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiMXRyb3kiLCJhIjoiY2w0MnJsMng2MDNuazNqbjgyaDc4emZ0ayJ9.wuM0JvCaczwYKSFNHRl3NA&limit=1'
//     request({url,json:true},(error,response)=>{
//       if(error){
//         callback('Unable to locate!.Sorry',undefined)
//       } else if(response.body.features.length === 0){
//         callback('Unable to find lontitude and longtitude!',undefined)
//       } else{
//         callback(undefined,{
//           latitude:response.body.features[0].center[1],
//           longtitude:response.body.features[0].center[0],
//           Location:response.body.features[0].place_name
//         })
//       }
//     })
// }






















const request = require('request')
const geoCode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiMXRyb3kiLCJhIjoiY2w0MnJsMng2MDNuazNqbjgyaDc4emZ0ayJ9.wuM0JvCaczwYKSFNHRl3NA&limit=1'
    request({url,json:true},(error,{body}={})=>{
      if(error){
        callback('Unable to locate!.Sorry',undefined)
      } else if(body.features.length === 0){
        callback('Unable to find lontitude and longtitude!',undefined)
      } else{
        callback(undefined,{
          latitude:body.features[0].center[1],
          longtitude:body.features[0].center[0],
          Location:body.features[0].place_name
        })
      }
    })
}

module.exports = geoCode
