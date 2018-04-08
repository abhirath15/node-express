const express = require('express');
const hbs = require('hbs');
const os = require('os');


const port = process.env.PORT || 3000

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');



// app.use((req,res,next)=>{
// 	res.render('demo.hbs');
		
// 	console.log('inside demo');
	
// 	// next();
// });


app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
	// res.send('hello Express');
	// res.send({
	// 	name: 'abhirath',
	// 	likes: [
	// 	'beer',
	// 	'adventure'
	// 	]
	// });
	res.render('home.hbs',{
		title: 'Home Page',
		message: "welcome",
		currentyear: new Date()
	});

});



hbs.registerHelper('screamIt', (text)=>{
	return text.toUpperCase();

})

app.get('/bad',(req,res)=>{
	res.send({
		ErrorMessage: 'error 404'
	});
});

app.listen(port);
console.log(`server is up on ${port}`);