import { FileOperation } from './FileOperation';
import path from 'path';

const fileOperation = new FileOperation(path.resolve(__dirname, '../csv/netflix.csv'));
fileOperation.read()
console.log(fileOperation.data);