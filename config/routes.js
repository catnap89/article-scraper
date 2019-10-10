module.exports = function(router) {
  // This route renders the homepage
  router.get("/", function(req, res) {
    res.render("home");
  });
  // this route renders the saved handlebars page
  router.get("/saved", function(req, res) {
    res.render("saved");
  });
}