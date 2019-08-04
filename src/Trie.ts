import { insertWord, searchWord, getValidWords} from './helpers'
import TrieNode from './TrieNode'

export default class Trie extends TrieNode {
    public constructor() {
        super(null)
    }

    public insert(word: string): void {
        insertWord(this, word)
    }

    public predict(prefix: string): string[] {
        const validPredictionTrie = searchWord(this, prefix)
        if (!validPredictionTrie) return []        

        let predictions = getValidWords(validPredictionTrie, prefix.slice(0, prefix.length - 1))
        predictions.sort((p1, p2) => p2.weight - p1.weight)
        return predictions.map((p) => p.word).slice(0, 3)
    }
}



