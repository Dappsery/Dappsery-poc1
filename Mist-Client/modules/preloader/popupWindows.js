/**
@module preloader PopupWindows
*/

const ipc = require('ipc');
const ipcProviderWrapper = require('../ipc/ipcProviderWrapper.js');
const Web3 = require('web3');
const web3Admin = require('../web3Admin.js');


// receive data in the popupWindow
ipc.on('data', function(data) {
    Session.set('data', data);
})


// make variables globally accessable
window.web3 = new Web3(new Web3.providers.IpcProvider('', ipcProviderWrapper));
web3Admin.extend(window.web3);

window.dirname = __dirname;
window.ipc = ipc;
window.platform = process.platform;

