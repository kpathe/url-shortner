const URL = require("../models/url.models");

async function handleRenderHTML(req, res) {
  const urls = await URL.find({});
  return res.render("index", {urls});
}

module.exports = handleRenderHTML;
