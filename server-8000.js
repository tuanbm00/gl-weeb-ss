const { spawn } = require("child_process");

const server = spawn("http-server", [
  "--proxy", "http://192.168.1.143:8080?",
  "-c-1",
  "-p", "8000"
]);

server.stdout.on("data", (data) => {
  const text = data.toString();

  // Bỏ log GET
  if (!text.includes("GET")) {
    console.log(text.trim());
  }
});

server.stderr.on("data", (data) => {
  console.error(data.toString());
});