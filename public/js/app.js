const express = require('express');
const path = require('path');
const ejs = require('ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'cleanBlogStarterFile/index.html'));
});

//Template Engine
app.set('view engine', 'ejs');
