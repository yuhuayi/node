const fs = require('fs');
const fetch = require('node-fetch');
const saveFile2Mongo = require('./saveFile2Mongo.js');
// Bagpipe
var downloadPic = function (src, dest) {
    fetch(src)
        .then(res => {
            res.body
                .pipe(fs.createWriteStream(dest))
                .on('close', function () {
                    saveFile2Mongo(src, dest, "image");
                    console.log('pic saved!');
                })
        })
        .catch(error => console.log(error));
}
module.exports = downloadPic;