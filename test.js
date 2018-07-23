const md5 = require('./index');

let instance = new md5('/Users/rain/Downloads/bigfile.zip');

instance.on('progress', p => {
    console.log(`current percnet ${p}%`);
});

instance.on('complete', v => {
    console.log(`file md5 is ${v}`);
});

instance.on('statusChanged', s => {
    console.log(`The new status is ${s}`);
});

instance.start();

setTimeout(() => {
    console.log('pause....')
    instance.pause();
}, 3000);

setTimeout(() => {
    console.log('resume....')
    instance.resume();
}, 3500);