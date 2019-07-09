import Router from 'koa-joi-router';
import helloRouter from './hello';

const { isNaN } = Number;
const router = new Router();

router.get('/hello', helloRouter);

router.get('/multiply/:x/:y', async (ctx, next) => {
  const x = Number(ctx.params.x);
  const y = Number(ctx.params.y);

  if (isNaN(x) || isNaN(y)) {
    throw new Error('Not a number.');
  }
  ctx.body = `${x}*${y} = ${x * y}`;
  await next();
});

router.get('/add/:x/:y', async (ctx, next) => {
  const x = Number(ctx.params.x);
  const y = Number(ctx.params.y);

  if (isNaN(x) || isNaN(y)) {
    throw new Error('Not a number.');
  }

  ctx.body = `${x} + ${y} = ${x + y}`;
  await next();
});

module.exports = router;
