const Lead = require("../models/lead.model");
const { ok, err } = require("../utils/response");

exports.list = async (req, res) => {
  const leads = await Lead.find({
    createdBy: req.userId
  });
  ok(res, leads);
};
exports.create = async (req, res) => {
  const l = await Lead.create({ ...req.body, createdBy: req.userId });
  ok(res, l);
};
exports.update = async (req, res) => {
  const l = await Lead.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  ok(res, l);
};
exports.remove = async (req, res) => {
  await Lead.findByIdAndDelete(req.params.id);
  ok(res, "deleted");
};
