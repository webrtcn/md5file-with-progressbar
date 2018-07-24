const fs = require('fs');
const crypto = require('crypto');
const emitter = require('events').EventEmitter; 
const status = require('./status');

class md5file extends emitter { 
    /**
     * md5 file constructor
     * @param {String} filepath Local file path
     * @param {String} encoding Hash digest, default 'base64'
     * @param {Object} option link to createReadSteam options.
     */
    constructor(filepath, encoding, option) {
        super();
        this.stream = null;
        this.file = filepath;
        this.option = option;
        this.status = status.waiting;
        this.encoding = encoding || 'base64';
    }

    /**
     * begin to calc
     */
    start() {
        let md5Sum = crypto.createHash('md5');
        let length = 0;
        let currentLength = 0;
        let currentPercent = null;
        if(this.option) {
            length = (this.option.end - this.option.start) + 1;
        } else {
            let stat = fs.statSync(this.file);
            length = stat.size;
        }
        this.stream = fs.createReadStream(this.file, this.option);
        this.stream.on('data', chunk => {
            if(this.status != status.running) {
                this.status = status.running;
                this.statusChanged();
            }
            currentLength += chunk.length;
            let p = Math.round((currentLength / length) * 100) / 100;
            p = parseInt(p * 100); 
            if (currentPercent != p) {
                currentPercent = p;
                this.emit("progress", currentPercent);
            }
            md5Sum.update(chunk);
        });
        this.stream.on('end', () => {
            this.status = status.end;
            this.statusChanged();
            let value = md5Sum.digest(this.encoding);
            this.emit('complete', value);
        });
        this.stream.on('error', err => {
            this.emit('error', err);
            this.status = status.end;
            this.statusChanged(); 
        })
    }

    /**
     * emit status changed value
     */
    statusChanged() {
        this.emit('statusChanged', this.status);
    }

    /**
     * pause calculation
     */
    pause() {
        if(this.stream) {
            this.stream.pause();  
        } 
        if(this.status != status.pause) {
            this.status = status.pause;
            this.statusChanged();
        }
    }

    /**
     * resume calculation
     */
    resume() {
        if(this.stream) {
            this.stream.resume(); 
        } 
    }

    /**
     * stop calculation
     */
    stop() {
        if (this.stream) {
            this.stream.destroy();
        } 
        if(this.status != status.end) {
            this.status = status.end;
            this.statusChanged();
        }
    }
}

module.exports = md5file;