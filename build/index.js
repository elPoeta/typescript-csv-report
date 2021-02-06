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
const CvsReader_1 = require("./domain/CvsReader");
const NetflixReader_1 = require("./domain/NetflixReader");
const read = () => __awaiter(void 0, void 0, void 0, function* () {
    const csvReader = new CvsReader_1.CsvReader('netflix.csv');
    const netflixReader = new NetflixReader_1.NetflixReader(csvReader);
    yield netflixReader.loadDataGrid();
    console.log(netflixReader.grids);
});
read();
