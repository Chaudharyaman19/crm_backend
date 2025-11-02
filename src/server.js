require("dotenv").config();
const app = require("./app");
const mongo = require("./config/mongo");
const PORT = process.env.PORT || 4000;
(async () => {
  const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/crm_db";
  await mongo.connect(uri);
  app.listen(PORT, () => console.log("Server running on", PORT));
})();
