"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const port = 8000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.end('<h1>Hello World</h1>');
});
app.listen(port, 'localhost', () => {
    console.log(`running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map