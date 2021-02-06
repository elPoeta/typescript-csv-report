import { FileOperation } from '../utils/FileOperation';

export class CsvReader {
    data: string[][] = [];

    constructor(private fileName: string) { }

    async readFile(): Promise<void> {
        const csvString = await FileOperation.getInstance().read(this.fileName);
        if (csvString === 'ENOENT') {
            console.log('ENOENT: no such file or directory, open')
            return;
        }
        this.data = csvString.split('\n').map((row: string): string[] => row.split(','));
    }
}