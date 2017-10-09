var fs = require('fs')
var spawn = require('child_process').spawn
const express = require('express')
const app = express()

var files = fs.readdirSync(__dirname + '/mov/').filter(function(o){ return o.indexOf('.') !== -1 })
files.forEach(function(name){
  console.log('name\t', name, name.split('.')[0])
  spawn('ffmpeg', ['-i', __dirname + '/mov/' + name, '-vframes', '1', './thumbnails/' + name.split('.')[0] + '.png'])
})

app.get('/videos', function (req, res) {
  console.log('got videos')
  var files = fs.readdirSync(__dirname + '/mov/')
  console.log(files)
  res.json(files.filter(function(o){return o.indexOf('.')!== -1}))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
