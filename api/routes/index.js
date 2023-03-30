const bodyParser = require('body-parser')
const tutores = require('./tutoresRouter.js')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(tutores);
};
