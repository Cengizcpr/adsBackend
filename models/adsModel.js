const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const adsSchema = new Schema ({
    
    appName : {
        type : String
    },
    playStoreLink : {
        type : String
    }, 
    appStoreLink : {
        type : String
    }, 
    img : {
        type : String

    }

})

module.exports = adsSchemas = mongoose.model('ads',adsSchema);