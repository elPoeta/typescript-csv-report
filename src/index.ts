import { FileOperation } from './utils/FileOperation';

const fileOperation = new FileOperation('netflix.csv');
const read = async () => {
    const data = await fileOperation.read();
    if (data === 'ENOENT') {
        console.log('ENOENT: no such file or directory, open')
        return;
    }
    console.log(data);
}
read();
