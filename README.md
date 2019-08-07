Here I implemented a prefix-trie to suggest predictive text options. The trie is populated using a chunk of Enron email data (100k emails).

You can run the example like this (assuming you need to have a recent version of node/yarn installed):

```
yarn
yarn tsc
node index.js
```

Next steps would be:

- Use promises/await everywhere instead of callbacks
- Serialize the populated tree and save it to disk (so it loads faster)
- Wrap that into a library, with an interface to import data and "query" it

# My notes

## Initial thoughts

- elasticsearch
- train an ml model
- from scratch → seems more fun - more actual coding

## Dataset

[https://](https://www.cs.cmu.edu/~enron/)[www.kaggle.com/wcukierski/enron-email-dataset/](https://www.kaggle.com/wcukierski/enron-email-dataset/downloads/enron-email-dataset.zip/2)

actually this one → [https://data.world/brianray/enron-email-dataset](https://data.world/brianray/enron-email-dataset)

(first chunk only)

## Data structure

[https://www.futurice.com/blog/data-structures-for-fast-autocomplete/](https://www.futurice.com/blog/data-structures-for-fast-autocomplete/)

→ trie with weight (frequency) at each leaf to order predictions

→ are there any other factors we should take into account when ordering?

→ how can we extend that for near matches?

will it fit in memory: [https://stackoverflow.com/questions/22183005/whats-the-size-of-a-prefix-tree-trie-that-contains-all-the-english-words](https://stackoverflow.com/questions/22183005/whats-the-size-of-a-prefix-tree-trie-that-contains-all-the-english-words)

## Language etc.

Could do Cpp for efficiency or java for nice stdlib but would be a lot of effort making an interface

Could do Go → KO since not enough exp, don't want to be checking syntax all the time

python/js easiest → go with js since easier to find nice libraries for interface

autocomplete cli libraries:

- [https://github.com/mokkabonna/inquirer-autocomplete-prompt](https://github.com/mokkabonna/inquirer-autocomplete-prompt)
- [https://github.com/bukinoshita/autocomplete-cli/blob/master/index.js](https://github.com/bukinoshita/autocomplete-cli/blob/master/index.js)

if there's time could make a frontend and host it somewhere

## Plan

1. Implement trie, populate it, save that somewhere
2. Add cli interface → load trie into mem, print highest x suggestions after each char typed
3. fuzzy
