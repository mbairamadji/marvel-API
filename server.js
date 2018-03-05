var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;


app.use(express.static("public"));

// app.use(function (req, res, next){
//   if (req.headers['x-forwarded-proto'] === 'https') {
//     next();
//   } else {
//     res.redirect('http://' + req.hostname + req.url);
//   }
// });


app.listen(PORT, function() {
	console.log("Server listening on " + PORT);
})