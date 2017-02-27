var express = require('express')
var request = require('request')

require('dotenv').config()
var app = express()

app.get('/api/weather', function(req, res) {
	var lat = req.query.lat
	var lon = req.query.lon
	var APIEndPoint = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + process.env.LOCAL_WEATHER_KEY + '&units=metric'
	request.get(APIEndPoint, function(err, response, body) {
		if (!err && response.statusCode===200) {
			var data = JSON.parse(body)
			res.json(data)
		}
	})
})

app.listen(process.env.PORT || 3000)
console.log('Server running on port 3000');