const {app, BrowserWindow, Menu} = require('electron')
function createWindow() {
    const win = new BrowserWindow({
        width: 1366,
        height: 768,
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecutionJavaScript: true,
            contextIsolation: true
        }
    })

    win.loadFile("./index.html");
    
}

app.whenReady().then(createWindow)