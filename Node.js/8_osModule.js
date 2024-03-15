const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// {
//     uid: -1,
//     gid: -1,
//     username: 'samki',
//     homedir: 'C:\\Users\\samki',
//     shell: null
// }

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime} seconds`);
// The system uptime is 1285953.75 seconds

const currentOs = {
    name : os.type(),
    release : os.release(),
    totalMemory : os.totalmem(),
    freeMemory : os.freemem(),
}
console.log(currentOs);

// {
//     name: 'Windows_NT',
//     release: '10.0.22621',
//     totalMemory: 16952647680,
//     freeMemory: 7640322048
// }