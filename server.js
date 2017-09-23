var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool= require('pg').Pool;


var config = {
    user: '	spc1194',
    database : 'spc1194',
    host : 'db.imad.hasura-app.io',
    port : '5432',
    password : process.env.DB_PASSWORD
}

var pool = new Pool(config); 


var app = express();
app.use(morgan('combined'));
var articles = {
     'article-one' : {
        title : ' Article One | Sagar Chandani',
        heading: ' Article One',
        date : 'Sept 23, 2017',
        content : `<p>
                    This is the content for my first article. This is the content for my first article. This is the content for my first article
        		This is the content for my first article.This is the content for my first article.
                </p>
                <p>
                    This is the content for my first article. This is the content for my first article. This is the content for my first article
        		This is the content for my first article.This is the content for my first article.
                </p>
                <p>
                    This is the content for my first article. This is the content for my first article. This is the content for my first article
        		This is the content for my first article.This is the content for my first article.
                </p> `
    },
    'article-two' : {
        
        title : ' Article Two | Sagar Chandani',
        heading: ' Article Two',
        date : 'Sept 24, 2017',
        content : `<p>
                    This is the content for my Second article.`
    },    
     'article-three' : {
         
        title : ' Article Three | Sagar Chandani',
        heading: ' Article Three',
        date : 'Sept 23, 2017',
        content : `<p>
                    This is the content for my third  article.`
     }
};

function createTemplate (data) {
        var title = data.title;
        var date = data.date;
        var heading = data.heading;
        var content = data.content;
        var htmlTemplate = `
        <html>
            <head>
                <title>
                    ${title}
                </title>
                
                <meta name="viewport" content="width=device-width, intitial-scale=1"/>
                
               <link href="/ui/style.css" rel="stylesheet" />
                
            </head>
            <body>
                <div class="container">
                    
                    <div>
                        <a href="/">Home</a>
                        
                    </div>
                    <hr/>
                    <h3> 
                        ${heading}
                    </h3>
                    <div>
                        ${date}
                    </div>
                  ${content}
                </div>
            </body>
        </html>
        `;
        
        return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var counter = 0;
app.get('/counter', function(req, res){
   counter = counter + 1; 
   res.send(counter.toString());
}); 
var names = [];
app.get('/submit-name', function(req,res){ //URL /submit-name?name=xxxx 
    //Get the name from th request
    var name = req.query.name;
    names.push(name);
    //JSON javascript object notation
    res.send(JSON.stringify(names)); 
    
})
app.get('/:articleName' , function(req , res){
    //articleName == article-one
    //articles[articleName] == content object for article
    var articleName = req.params.articleName;
     res.send(createTemplate(articles[articleName]));
});


app.get('/test-db', function(req, res){
    
    //make a select request
    
    //return a response
    pool.query('SELECT * FROM test', function(err,result){
       if(err){
           res.status(500).send(err.toString());
       } else{
           res.send(JSON.stringify(result));
       }
    });
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
