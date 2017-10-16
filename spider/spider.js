const fetch = require('node-fetch');
var Bagpipe = require('bagpipe');
var bagpipe = new Bagpipe(10,{timeout: 100});
const downloadPic = require('./downloadPic.js');

fetch('http://gank.io/api/data/%E7%A6%8F%E5%88%A9/1000/1')
    .then(res => res.json())
    .then(json => {
        let images = [];
        for (let i in json.results) {
            images.push(json.results[i].url);
        }
        return images;
    })
    .then(images => {
        for (let i in images) {
            let dest2 = images[i].split("/");
            // downloadPic(images[i], "./image/" + dest2[dest2.length - 1]);
            bagpipe.push(downloadPic, images[i], "./image/" + dest2[dest2.length - 1], function(err, data){
                //
            });
        }
    })
    .catch(error => console.log(error));