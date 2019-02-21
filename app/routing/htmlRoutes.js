// Path package will get the correct file path for our HTML
// ==========================================
var path = require("path");

// ROUTING
// ======================================
module.exports = function(app) {

    // Code below handles when the user "visits" a page.
    // ===========================================
    // Route to home page
    // ==========================================
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

    // Route to survey page
    // ==========================================
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // Default to home
    // ==========================================
    app.use("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};