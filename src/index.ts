import { CsvReader } from './domain/CvsReader';
import { NetflixReader } from './domain/NetflixReader';

const read = async () => {
    const csvReader = new CsvReader('netflix.csv');
    const netflixReader = new NetflixReader(csvReader);
    await netflixReader.loadDataGrid();
    console.log(netflixReader.grids);
}
read();
