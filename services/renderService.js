import Handlebars from "handlebars";
import mjml2html from 'mjml';

import fs from 'fs';
import path, {
    dirname
} from 'path';
import {
    fileURLToPath
} from 'url';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

const templates = {
    latestQuestions: fs.readFileSync(path.join(__dirname, '../templates/mjml/latest-questions.mjml')).toString(),
};

export const render = async (name, model) => {
    const source = templates[name];
    const template = Handlebars.compile(source);
    const mjmlSource = template(model);
    const mjmlResult = mjml2html(mjmlSource);
    return mjmlResult.html;
}