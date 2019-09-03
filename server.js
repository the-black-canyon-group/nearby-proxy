const express = require('express');
const app = express();
const path = require('path')
const pug = require('pug')




app.use(express.static('views'));

app.get('/listing/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'))

})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
