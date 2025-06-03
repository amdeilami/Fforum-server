"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250602235610 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250602235610 extends migrations_1.Migration {
    async up() {
        this.addSql(`create table "post" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null, "title" text not null);`);
    }
    async down() {
        this.addSql(`drop table if exists "post" cascade;`);
    }
}
exports.Migration20250602235610 = Migration20250602235610;
//# sourceMappingURL=Migration20250602235610.js.map