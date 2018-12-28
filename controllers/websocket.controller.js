var sockets = {};


// module.exports.notifyBook = (ws, req) => {
//     ws.on('message', function (msg) {
//     });

//     let providerId = req.body.providerId.toString();
//     if (!sockets['book']) sockets['book'] = {};
//     sockets['book'][providerId] = ws;
// }


module.exports.sockets = sockets;

