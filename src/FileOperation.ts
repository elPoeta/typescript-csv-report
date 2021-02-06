import fs from 'fs';

export class FileOperation {
    constructor(public file: string) { }

    read(): string {
        const data = fs.readFileSync(this.file, { encoding: 'utf-8' });
        return data;
    }
}