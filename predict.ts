import { insertWord, searchWord, getValidWords} from './helpers'
import TrieNode from './TrieNode'

class Trie extends TrieNode {
    public constructor() {
        super(null)
    }

    public insert(word: string): void {
        insertWord(this, word)
    }

    public predict(prefix: string): string[] {
        const validPredictionTrie = searchWord(this, prefix)
        if (!validPredictionTrie) return []

        console.log(JSON.stringify(validPredictionTrie, null, 2))
        

        let predictions = getValidWords(validPredictionTrie, prefix.slice(0, prefix.length - 1))
        predictions.sort((p1, p2) => p2.weight - p1.weight)
        return predictions.map((p) => p.word).slice(0, 3)
    }
}



const demo = (): void => {
    const PredictionTrie = new Trie()
    
    const words = ["a", "aadvark", "animal", "animal", "anteater", "and"]
    words.forEach((word): void => PredictionTrie.insert(word))
    
    const prediction = PredictionTrie.predict('a')
    console.log(prediction)
}

demo()