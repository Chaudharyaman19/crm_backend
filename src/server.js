require("dotenv").config();
const app = require("./app");
const mongo = require("./config/mongo");
const PORT = process.env.PORT || 4000;
(async () => {
  const uri = process.env.MONGO_URI || "mongodb+srv://aarjun8060:Samarpal08%40@cluster0.adxlu1n.mongodb.net/crm_db";
  await mongo.connect(uri);
  app.listen(PORT, () => console.log("Server running on", PORT));
})();
