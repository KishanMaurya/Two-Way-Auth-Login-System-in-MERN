var admin = require("firebase-admin");

var serviceAccount = require("../config/fbAccountService.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ecommerce-225c8.firebaseio.com",
});

module.exports = admin;
