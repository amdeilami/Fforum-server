"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const Post_1 = require("./entities/Post");
const mikro_orm_config_1 = __importDefault(require("./mikro-orm.config"));
const main = async () => {
    const orm = await core_1.MikroORM.init(mikro_orm_config_1.default);
    await orm.getMigrator().up();
    const entityManager = orm.em.fork();
    const post = entityManager.create(Post_1.Post, { title: 'my first post', createdAt: new Date(), updatedAt: new Date() });
    await entityManager.persistAndFlush(post);
    const postCheck = await entityManager.find(Post_1.Post, {});
    console.log(postCheck);
};
main().catch((err) => {
    console.error(err);
});
console.log("Hello dearest World");
//# sourceMappingURL=index.js.map