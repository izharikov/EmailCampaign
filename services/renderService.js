const Handlebars = require("handlebars");
const mjml2html = require('mjml');

const fs = require('fs');
const path = require('path');

const templates = {
    latestQuestions: fs.readFileSync(path.join(__dirname, '../templates/mjml/latest-questions.mjml')).toString(),
};

const render = async (name, model) => {
    const source = templates[name];
    const template = Handlebars.compile(source);
    const mjmlSource = template(model);
    const mjmlResult = mjml2html(mjmlSource);
    return mjmlResult.html;
};

module.exports = {
    render
};