const express = require('express');
const multer = require('multer');
const app = express();

var upload = multer({
    storage: myStorage,
    fileFilter: function(req, file , cd){
        if(file.mimetype != 'image/jpg'){
            return cd(new Error('Wrong file type'));
        }
    }});

app.post('/upload_file', upload.single('myfile'), function(req, res){
    res.send('上傳成功' + '<input type ="button" onclick="history.back()" value="回到上一頁"></input>');
});
app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html', function(err){
        if(err) res.send(404);
    });
});

app.listen(3000);