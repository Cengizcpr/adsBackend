const ads = require("./ads.json");
const adsModel = require("../models/adsModel");
module.exports.firstCreate = function () {
ads.map((ad) => {
  const objModel = {
    appName: ad.appName,
    playStoreLink: ad.playStoreLink,
    appStoreLink: ad.appStoreLink,
    img: ad.img,
  };
  adsModel.create(objModel, (err, data) => {
    if (err) console.log(err);
    else console.log(data);
  });
});
}