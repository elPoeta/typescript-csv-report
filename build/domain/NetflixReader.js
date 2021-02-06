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
exports.NetflixReader = void 0;
const utilParser_1 = require("../utils/utilParser");
class NetflixReader {
    constructor(reader) {
        this.reader = reader;
        this.grids = [];
    }
    loadDataGrid() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.reader.readFile();
            this.grids = this.reader.data.map((row) => [
                row[0],
                row[1],
                row[2],
                row[3],
                row[4],
                row[5],
                utilParser_1.parseDate(row[6]),
                utilParser_1.parseYearToNumber(row[7]),
                row[8],
                row[9],
                row[10],
                row[11]
            ]).slice(1);
        });
    }
}
exports.NetflixReader = NetflixReader;
