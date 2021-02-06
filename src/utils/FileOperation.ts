import fs from 'fs/promises';
import path from 'path';

export class FileOperation {
    private baseDir: string = path.resolve(__dirname, '../../csv');

    static getInstance() {
        return new FileOperation();
    }

    constructor() { }

    async read(fileName: string): Promise<string> {
        try {
            await fs.open(`${this.baseDir}/${fileName}`, 'r');
            const data = await fs.readFile(`${this.baseDir}/${fileName}`, 'utf-8');
            return data;
        } catch (error) {
            return error.code;
        }
    }
}