const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    myPing() {
      ipcRenderer.send('ipc-example', 'ping');
    },
    on(channel, func) {
      const validChannels = ['ipc-example', 'video', 'modal'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    },
    once(channel, func) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (event, ...args) => func(...args));
      }
    },
  },
  store: {
    get(val) {
      return ipcRenderer.sendSync('electron-store-get', val);
    },
    set(property, val) {
      ipcRenderer.send('electron-store-set', property, val);
    },
  },
});

// window.addEventListener('videoContentLoaded', (s) => {
//   const replaceSrc = (src) => {
//     const ele = document.querySelector('video');
//     if (ele) ele.src = src;
//   };

//   replaceSrc(s);
// });
// contextBridge.exposeInMainWorld('videoContentLoaded', (s) => {
//   const replaceSrc = (src) => {
//     const ele = document.querySelector('video');
//     if (ele) ele.src = src;
//   };

//   replaceSrc(s);
// });
