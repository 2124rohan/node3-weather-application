const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geoCode= require('./utils/geocode')
const forecast = require('./utils/forcast')

const app = express()

const port = process.env.PORT || 7000

//Define Paths For Express Config
app.use(express.static(path.join(__dirname,'../public'))) // Setup Static Directory to Serve
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

// SetUp handleBars engine and Views location
app.set('view engine', 'hbs')
app.set('views',viewPath)
hbs.registerPartials(partialsPath)

app.get('/', (req, res)=>{ 
	res.render('index',{
		title:'Weather',
		name1: 'Rohan'
	})
    })

app.get('/about',(req,res)=>{
	res.render('about',{
		title:'About Me',
		name1:'Rohan'
	})
})
app.get('/help',(req,res)=>{
	res.render('help',{
		name1:'Alex',
		name2:'Rohan',
		title:'Help',
		author:'Rohan Vishwakarma'
	})
})

app.get('/weather',(req,res)=>{
	if(!req.query.address){
		return res.send({
			error:'Address must be provided'
		})
	}
	const address = req.query.address
	geoCode(address,(error,{latitude,longtitude,Location}={})=>{
		if(error){
		  return res.send(error)
		}
		forecast(latitude,longtitude,(error,forcastData)=>{
		  if(error){
			return res.send(error)
		  }
		  res.send({
			Forcast:forcastData,
			Location:Location,
			address:req.query.address
		})
		})
		
	  })
})

app.get('/products',(req,res)=>{
	if(!req.query.search){
		return res.send({
			Error: 'you must provide a search term'
		})
	}
	console.log(req.query)
    res.send({
        products:[]
    })
})


app.get('/help/*',(req,res)=>{
	res.render('pageNotFound',{
		title:404,
		message:'Help Article Not Found',
		name1:'Rohan',
	})
})

app.get('*',(req,res)=>{
	res.render('pageNotFound',{
		title:404,
		message:'Page Not Found!',
		name1:'Rohan',
	})
})


app.listen(port,()=>{
    console.log('server is up on port '+ port)
})










// console.log(__dirname)
// console.log()
// app.get('/',(req,res)=>{
//     res.send('<h1>Weather</h1>')

// })

// app.get('/help', (req,res)=>{
//     res.sendFile((path.join(__dirname,'../public/help.html')))
// }) 

// app.get('/about',(req,res)=>{
//     res.sendFile((path.join(__dirname,'../public/about.html')))
// })
