const bodyParser = require('body-parser')
const tutores = require('./tutoresRouter.js');
const pets = require('./petsRouter.js');
const abrigos = require('./abrigosRouter.js');
const adocoes = require('./adocoesRouter.js');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(tutores);
    app.use(pets);
    app.use(abrigos);
    app.use(adocoes);
};
