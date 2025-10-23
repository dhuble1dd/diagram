module.exports = function (jsModule) {
    switch (jsModule) {
        case 'drivelist': return require('E:/Projects/theia/diagram/glsp-client/node_modules/drivelist/build/Release/drivelist.node');
    }
    throw new Error(`unhandled module: "${jsModule}"`);
}