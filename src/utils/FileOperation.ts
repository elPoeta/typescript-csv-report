import fs from 'fs/promises';
import path from 'path';

export class FileOperation {
    private baseDir: string = path.resolve(__dirname, '../../csv');
    constructor(public fileName: string) { }

    async read(): Promise<string> {
        try {
            await fs.open(`${this.baseDir}/${this.fileName}`, 'r');
            const data = await fs.readFile(`${this.baseDir}/${this.fileName}`, 'utf-8');
            return data;
        } catch (error) {
            return error.code;
        }
    }
}