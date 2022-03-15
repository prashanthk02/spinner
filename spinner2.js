process.stdout.write('hello from spinner2.js... \rheyyy\n');
let line = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];
let time = 100;

for (const el of line) {
  setTimeout(() => {process.stdout.write(el)}, time += 200)
};