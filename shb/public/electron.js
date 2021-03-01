const path = require("path");
const url = require("url");

const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

const baseUrl = "http://localhost:3000";

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 450,
    height: 828,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
    },
  });

  const mainWindowUrl = url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: "file",
  });

  mainWindow.loadURL(isDev ? baseUrl : mainWindowUrl);

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", () => {
  createMainWindow();
});

app.on("window-all-closed", () => {
  app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) {
    createMainWindow();
  }
});
