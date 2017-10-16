module.exports = {
    mongodb:{
        // host:"192.168.20.132",
        host:"localhost",
        port:"27017",
        dataBaseName:"spider",
        useMongoClient: true,
        options :{
            db: { native_parser: true },
            server: { poolSize: 5 },
        }
    }
};
