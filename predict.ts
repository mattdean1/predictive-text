interface ChildNodes {[key: string]: TrieNode}


interface TrieNode {
    letter: string;
    children: ChildNodes;
    isLeaf: boolean;
    weight?: number;
}

class TrieNode {
    public constructor(letter: string) {
        this.letter = letter
        this.children = {}
        this.isLeaf = false
    }
}

const insertWord = (node: TrieNode, word: string): void => {
    if (word.length === 0) {
        if (node.isLeaf) node.weight++
        else {
            node.isLeaf = true
            node.weight = 0
        }
    } else {
        const first = word.charAt(0)
        if (!node.children[first]) {
            node.children[first] = new TrieNode(first)
        }
        insertWord(node.children[first], word.slice(1))
    }
}

class Trie extends TrieNode {
    public constructor() {
        super(null)
    }

    public insert(word: string): void {
        insertWord(this, word)
    }
}


const PredictionTrie = new Trie()

const words = ["a", "aadvark", "animal", "anteater", "and"]
words.forEach(word => PredictionTrie.insert(word))

console.log(JSON.stringify(PredictionTrie, null, 2))