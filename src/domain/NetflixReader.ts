import { NetflixGridResult } from '../types/NetflixGridResult';
import { DataReader } from '../interfaces/DataReader';
import { ShowType } from '../types/ShowType';
import { parseDate, parseYearToNumber } from '../utils/utilParser';


export class NetflixReader {
    grids: NetflixGridResult[] = [];

    constructor(private reader: DataReader) { }

    async loadDataGrid(): Promise<void> {
        await this.reader.readFile();
        this.grids = this.reader.data.map((row: string[]): NetflixGridResult => [
            row[0],
            row[1] as ShowType,
            row[2],
            row[3],
            row[4],
            row[5],
            parseDate(row[6]),
            parseYearToNumber(row[7]),
            row[8],
            row[9],
            row[10],
            row[11]
        ]).slice(1);
    }
}