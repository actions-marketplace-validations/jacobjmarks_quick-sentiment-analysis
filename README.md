# Quick Sentiment Analysis

Utilise the [`sentiment`](https://www.npmjs.com/package/sentiment) module to analyze the sentiment of provided text.

## Inputs

### `text`

Text to analyze

## Outputs

### `result`

Sentiment analysis results.

Result is formatted as JSON. Example:

``` json
{
    "score": 1,
    "comparative": 0.1111111111111111,
    "calculation": [ { "allergic": -2 }, { "love": 3 } ],
    "tokens": [
        "i",
        "love",
        "cats",
        "but",
        "i",
        "am",
        "allergic",
        "to",
        "them"
    ],
    "words": [
        "allergic",
        "love"
    ],
    "positive": [
        "love"
    ],
    "negative": [
        "allergic"
    ]
}
```

## Example usage

``` yaml
- uses: jacobjmarks/quick-sentiment-analysis@v1
  id: sentiment-analysis
  with:
    text: "I love cats, but I am allergic to them."

- run: echo '${{ steps.sentiment-analysis.outputs.result }}'
```
