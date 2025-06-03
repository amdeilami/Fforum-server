"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("./entities/Post");
const postgresql_1 = require("@mikro-orm/postgresql");
const constants_1 = require("./constants");
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, './migrations'),
        glob: '!(*.d).{js,ts}',
    },
    entities: [Post_1.Post],
    dbName: process.env.DB_NAME,
    driver: postgresql_1.PostgreSqlDriver,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    debug: !constants_1.__prod__
};
//# sourceMappingURL=mikro-orm.config.js.map