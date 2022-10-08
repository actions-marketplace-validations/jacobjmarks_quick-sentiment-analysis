const core = require('@actions/core');
const Sentiment = require('sentiment');

async function run() {
    const text = core.getInput("text", { required: true });
    const sentiment = new Sentiment();
    const result = sentiment.analyze(text);
    core.setOutput("result", result);
}

run();
