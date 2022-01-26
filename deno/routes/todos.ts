import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router()

interface Todo {
  id: string,
  text: string,
}

let todos: Todo[] = [];

router.get('/todos', (ctx) => {
  ctx.response.body = { todos: todos };
});

router.post('/todos', async (ctx) => {
  const result = await ctx.request.body();
  // console.log('result');
  const text = await result.value;
  // console.log(text.value);
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: text,
  };
  todos.push(newTodo)
  ctx.response.body = {
    message: 'Created!',
    todo: newTodo
  };
})

router.put('/todos/:todoId', async (ctx) => {
  const result = await ctx.request.body();
  const text = await result.value;
  const tid = ctx.params.todoId;
  const todoIndex = todos.findIndex((todo) => {
    return (todo.id = tid);
  });
  todos[todoIndex] = { id: todos[todoIndex].id, text: text };
  ctx.response.body = {message: 'Updated Todo'}
})

router.delete('/todos/:todoId', (ctx) => {
  const tid = ctx.params.todoId;
  todos = todos.filter((todo) => todo.id !==tid)
  ctx.response.body = {
    message: 'Deleted todo'
  }
})

export default router