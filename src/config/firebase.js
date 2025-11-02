// src/config/firebase.js
const admin = require("firebase-admin");
const serviceAccount = require("./firebase-db.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

module.exports = admin; // ✅ CommonJS export
