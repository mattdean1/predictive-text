import { parseCSV } from './src/csv'
import Trie from './src/Trie'

// @ts-ignore
const trieDemo = (): void => {
    const predictionTrie = new Trie()
    
    const words = ["a", "aadvark", "animal", "animal", "anteater", "and"]
    words.forEach((word): void => predictionTrie.insert(word))
    
    const prediction = predictionTrie.predict('a')
    console.log(prediction)
}

const fullDemo = (): void => {
    const predictionTrie = new Trie()
    console.log('Loading...')
    parseCSV(predictionTrie, () => {
        console.log('Prediction for top:')
        console.log(predictionTrie.predict('top'))

        const stdin = process.stdin
        stdin.setEncoding('utf-8')
        console.log("Enter a word to predict")
        stdin.on('data', function (data) {
            console.log(predictionTrie.predict(data.trim()))
        })
    })


    
}

fullDemo()