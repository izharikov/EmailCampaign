const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const DAYS = 7;

const fromDate = () => Math.floor((Date.now() - DAYS * 24 * 60 * 60 * 1000) / 1000);

const url = () =>
    'https://api.stackexchange.com/questions/unanswered?order=desc&filter=default&site=sitecore.stackexchange.com&fromdate=' + fromDate();

const getLatestQuestions = async () => {
    const data = await fetch(url());
    const json = await data.json();
    return json;
};

module.exports = {
    getLatestQuestions
};