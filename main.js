const core = require('@actions/core');
const Sentiment = require('sentiment');

try {
    const text = core.getInput("text", { required: true });
    const sentiment = new Sentiment();
    const result = sentiment.analyze(text);
    core.setOutput("result", result);
} catch (error) {
    core.setFailed(error);
}
