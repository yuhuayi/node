const fetch = require('node-fetch');
var HttpsProxyAgent = require('https-proxy-agent');

// var tumblr_api_read = {"tumblelog": {"title": "test"}};

// var tumblr_api_read  = {};
// eval("var tumblr_api_read = {\"tumblelog\": {\"title\": \"test\"}}");
// console.log(tumblr_api_read);
fetch('https://animxart.tumblr.com/api/read/json?start=0&num=1',
    {

        agent: new HttpsProxyAgent('http://127.0.0.1:1087')
    })
    .then(res => res.text())
    .then(body => {
        var tumblr_api_read  = {};
        eval(body);
        return tumblr_api_read;
    })
    .then(json => {
        //todo 解析出image、video 下载并存入Mongo
    })
    .catch(error => console.log(error));
