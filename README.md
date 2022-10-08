# Sentiment Analysis

Utilise the [`sentiment`](https://www.npmjs.com/package/sentiment) module to analyze the sentiment of provided text.

## Inputs

### `text`

Text to analyze

## Outputs

### `result`

Sentiment analysise results. Example: `{ "score": 0.12, ... }`

## Example usage

``` yaml
- uses: jacobjmarks/gha-javascript-action@v1.0.0
  with:
    text: 'I really love this action!'
```
