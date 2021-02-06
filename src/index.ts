import { FileOperation } from './utils/FileOperation';

const read = async () => {
    const data = await FileOperation.getInstance().read('netflix.csv');
    if (data === 'ENOENT') {
        console.log('ENOENT: no such file or directory, open')
        return;
    }
    console.log(data);
}
read();
