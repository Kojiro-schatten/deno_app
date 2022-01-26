const text = "test";

const encoder = new TextEncoder();
const data = encoder.encode(text);

Deno.writeFile('message.txt', data).then(() => {
  console.log('Wrotten!');
})

// 実行時、permission指定しないとコンパイルされない。
// deno run --allow-write=message.txt app.ts
