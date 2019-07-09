
async function helloRoute(ctx, next) {
  ctx.body = 'well hello there....test...';
  await next();
}

export default helloRoute;
