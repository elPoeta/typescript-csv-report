"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvReader = void 0;
const FileOperation_1 = require("../utils/FileOperation");
class CsvReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    readFile() {
        return __awaiter(this, void 0, void 0, function* () {
            const csvString = yield FileOperation_1.FileOperation.getInstance().read(this.fileName);
            if (csvString === 'ENOENT') {
                console.log('ENOENT: no such file or directory, open');
                return;
            }
            this.data = csvString.split('\n').map((row) => row.split(','));
        });
    }
}
exports.CsvReader = CsvReader;
