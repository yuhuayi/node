const mongoose = require('../test/dbconn.js');
const conn = mongoose.connection;
const spiderFile = require('../dbm/spiderFile.js');

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function () {
    var Schema = mongoose.Schema;
    var SpiderFile = new Schema(spiderFile, {collection: "spiderFile"});
    conn.model("spiderFile", SpiderFile);
});

const saveFile2DB = function (source_url, local_url, type) {
    const SpiderFileModel = conn.model("spiderFile");
    const spider_file = new SpiderFileModel({
        "source_url": source_url,
        "local_url": local_url,
        "type": type,
        "update_time": Date.now()
    });

    spider_file.save(function (err) {
        if (err) return handleError(err);
    });
}
module.exports = saveFile2DB;