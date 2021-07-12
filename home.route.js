module.exports = (app) => {
    const home= require('../controller/home.controllers.js');
//home menu
app.get('/', home.root);
}