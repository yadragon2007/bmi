const { app, BrowserWindow, Menu, MenuItem } = require("electron/main");
const path = require("node:path");
function homePage() {
  const homeWin = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, "/icons/png/1024x1024.png"),
  });
  homeWin.loadFile("index.html");
}

app.whenReady().then(() => {
  homePage();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length == 0) homePage();
});
