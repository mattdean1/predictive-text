import TrieNode from './TrieNode'

interface Prediction {
    word: string;
    weight: number;
}

export const insertWord = (node: TrieNode, word: string): void => {
    if (word.length === 0) {
        node.weight++
        node.isLeaf = true
    } else {
        const first = word.charAt(0)
        if (!node.children[first]) {
            node.children[first] = new TrieNode(first)
        }
        insertWord(node.children[first], word.slice(1))
    }
}

export const searchWord = (node: TrieNode, partialWord: string): TrieNode | null => {
    if (partialWord.length === 0) return node

    const first = partialWord.charAt(0)
    if (!node.children[first]) return null

    return searchWord(node.children[first], partialWord.slice(1))
}

export const getValidWords = (node: TrieNode, prefix: string): Prediction[] => {
    const predictions = node.isLeaf ? [{ word: prefix + node.char, weight: node.weight }] : []
    if (!node.children) return predictions

    return Object.values(node.children).reduce((acc, childNode): Prediction[] => {
        return [...acc, ...getValidWords(childNode, prefix + node.char)]
    }, predictions)
}