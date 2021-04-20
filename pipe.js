const gzip = require("zlib").createGzip();
const fs = require("fs");

const inp = fs.createReadStream("./video.mp4");
const out = fs.createWriteStream("./video-pipe.mp4.gz");

inp.pipe(gzip).pipe(out);
