const express = require('express');
const multer = require('multer');
const app = express();
const bodyParser = require('body-parser');
//const { myStorage } = require('multer');

var urlencodeParser = bodyParser.urlencoded()//解析Form Data
var upload = multer({dest: 'upload/'});


app.get('/getdata', function(req,res){
    console.log(req.query);
    res.send('收到的資料 = ' + JSON.stringify(req.query));
});
app.post('/postdata', urlencodeParser, function(req, res){
    console.log(req.body);
    res.send('收到的資料 = ' + JSON.stringify(req.body));
});
app.post('/upload_file', upload.single('myfile'), function(req, res){
    res.send('上傳成功' + '<input type ="button" onclick="history.back()" value="回到上一頁"></input>');
});
app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html', function(err){
        if(err) res.send(404);
    });
});

app.listen(3000);