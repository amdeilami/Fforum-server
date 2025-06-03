import { Post } from "./entities/Post";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { __prod__ } from "./constants";
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export default {
    migrations: {
        path: path.join(__dirname, './migrations'), // path to the folder with migrations
        glob: '!(*.d).{js,ts}', // how to match migration files (all .js and .ts files, but not .d.ts)
      },
        entities: [Post],
        dbName: process.env.DB_NAME,
        driver: PostgreSqlDriver,
        user: process.env.DB_USER, 
        password: process.env.DB_PASS,
        debug: !__prod__
};
