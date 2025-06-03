import { MikroORM} from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
    const orm = await MikroORM.init<PostgreSqlDriver>(microConfig);
    // running migrations without need to use CLI
    await orm.getMigrator().up();
    const entityManager = orm.em.fork();
    const post = entityManager.create(Post, {title: 'my first post', createdAt: new Date(), updatedAt: new Date()});
    await entityManager.persistAndFlush(post);

    const postCheck = await entityManager.find(Post, {});
    console.log(postCheck);
    
};

main().catch((err) => {
    console.error(err);
});



console.log("Hello dearest World");