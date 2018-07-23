# MD5 file with progress bar

## Require

- node: ^6.0.0


## Install

```
npm install --save md5file-with-progressbar
```

## Usage

```
const md5 = require('md5file-with-progressbar');

let instance = new md5('/Users/anybody/Downloads/bigfile.zip');

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

```

## Demo

```
The new status is 1
current percnet 0%
current percnet 1%
current percnet 2%
current percnet 3%
current percnet 4%
current percnet 5%
current percnet 6%
current percnet 7%
current percnet 8%
current percnet 9%
current percnet 10%
current percnet 11%
current percnet 12%
current percnet 13%
current percnet 14%
current percnet 15%
current percnet 16%
current percnet 17%
current percnet 18%
current percnet 19%
current percnet 20%
current percnet 21%
current percnet 22%
current percnet 23%
current percnet 24%
current percnet 25%
current percnet 26%
current percnet 27%
current percnet 28%
current percnet 30%
current percnet 31%
current percnet 32%
current percnet 33%
current percnet 34%
current percnet 35%
current percnet 36%
current percnet 37%
current percnet 38%
current percnet 39%
current percnet 40%
current percnet 41%
current percnet 42%
current percnet 43%
current percnet 44%
current percnet 45%
current percnet 46%
current percnet 47%
current percnet 48%
current percnet 49%
current percnet 50%
current percnet 51%
current percnet 52%
current percnet 53%
current percnet 54%
current percnet 55%
current percnet 56%
current percnet 57%
current percnet 59%
current percnet 60%
current percnet 61%
current percnet 62%
current percnet 63%
current percnet 64%
The new status is 2
The new status is 1
current percnet 65%
current percnet 66%
current percnet 67%
current percnet 68%
current percnet 69%
current percnet 70%
current percnet 71%
current percnet 72%
current percnet 73%
current percnet 74%
current percnet 75%
current percnet 76%
current percnet 77%
current percnet 78%
current percnet 79%
current percnet 80%
current percnet 81%
current percnet 82%
current percnet 83%
current percnet 84%
current percnet 85%
current percnet 86%
current percnet 87%
current percnet 88%
current percnet 89%
current percnet 90%
current percnet 91%
current percnet 92%
current percnet 93%
current percnet 94%
current percnet 95%
current percnet 96%
current percnet 97%
current percnet 98%
current percnet 99%
current percnet 100%
The new status is 3
file md5 is HlTfbUQoy1wT2rwgOqW5pw==

```

## License

this project uses `SATA` license (The Star And Thank Author License)，anyway，you should star this repo before use.