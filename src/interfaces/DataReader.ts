export interface DataReader {
  readFile(): Promise<void>,
  data: string[][];
}
