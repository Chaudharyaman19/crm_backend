exports.ok = (res, data) => res.json({ success: true, data });
exports.err = (res, message, code = 400) =>
  res.status(code).json({ success: false, message });
