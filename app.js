var express = require('express')
var app = express()
var port = process.env.PORT || 3000

app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));

app.get('/', function (req,res) {
  var matriz = [[2, 1, 1, 3, 3],[1, 2, 1, 1, 1,],[1, 1, 2, 1, 1],[1, 1, 1, 2, 1],[1, 1, 1, 1, 2]];
  res.render("home",{matriz:matriz});
});
app.listen(port, function () {
  console.log('Servidor rodando em http://localhost:%s', port)
});
