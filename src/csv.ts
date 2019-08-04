import csv from 'csv-parser'
import {createReadStream } from 'fs'
import Trie from './Trie'

const readCSV = (onData: (content: string) => void, onEnd?: () => void): void => {
    createReadStream('data.csv')
        .pipe(csv())
        .on('data', (data) => onData(data.content))
        .on('end', () => {
            console.log('CSV import finished')
            onEnd && onEnd()
        })
}

export const parseCSV = (trie: Trie, onEnd?: () => void): void => {
    readCSV((content: string) => {
        const words = content.split(" ")
        words.forEach(w => trie.insert(w))
    }, onEnd)
}