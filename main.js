const { app, BrowserWindow } = require("electron");

// include the Node.js 'path' module at the top of your file
const path = require("node:path");

// modify your existing createWindow() function
const createWindow = () => {
  const win = new BrowserWindow({
    width: 320,
    height: 240,
    // hide menu bar
    // autoHideMenuBar: true,
    // remove borders
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    // allow dragging the window from anywhere
    draggable: true,
  });

  win.loadFile("index.html");
};
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
