interface ChildNodes {[key: string]: TrieNode}

export default class TrieNode {
    public char: string | null;
    public children: ChildNodes;
    public isLeaf: boolean;
    public weight: number;
    
    public constructor(char: string | null) {
        this.char = char
        this.children = {}
        this.isLeaf = false
        this.weight = 0
    }
}
