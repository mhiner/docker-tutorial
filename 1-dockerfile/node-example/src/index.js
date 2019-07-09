import Koa from 'koa';
import router from './routes/index';

const app = new Koa();
app.use(router.middleware());
// app.use(async (ctx) => {
//   ctx.body = 'Hello World';
// });

app.listen(3000);
