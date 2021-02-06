import { CsvReader } from './domain/CvsReader';

const read = async () => {
    const csvReader = new CsvReader('netflix.csv');
    await csvReader.readFile();
    console.log(csvReader.data);
}
read();
