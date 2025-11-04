const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const host = "0.0.0.0"; // 👈 监听所有网卡接口，允许局域网访问

// 提供静态资源
app.use(express.static(path.join(__dirname, "public")));

// 处理 SPA 的路由回退
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 启动服务（允许局域网访问）
app.listen(port, host, () => {
  console.log(`✅ Sample web app running at:`);
  console.log(`   Local:    http://localhost:${port}`);
  console.log(`   Network:  http://${getLocalIP()}:${port}`);
});

// 获取本机局域网 IP，用于显示
function getLocalIP() {
  const os = require("os");
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }
  return "0.0.0.0";
}
