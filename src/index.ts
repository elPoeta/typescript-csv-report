import { FileOperation } from './FileOperation';
import path from 'path';
console.log(path.resolve(__dirname, '../csv/netflix.csv'))
const fileOperation = new FileOperation(path.resolve(__dirname, '../csv/netflix.csv'));
console.log(fileOperation.read());