"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseYearToNumber = exports.parseDate = void 0;
const parseDate = (date) => new Date(date);
exports.parseDate = parseDate;
const parseYearToNumber = (year) => parseInt(year);
exports.parseYearToNumber = parseYearToNumber;
