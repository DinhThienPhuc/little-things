const stream = require("stream");
const fs = require("fs");
const zlib = require("zlib");
const util = require("util");

const pipeline = util.promisify(stream.pipeline);

const run = async () => {
  try {
    await pipeline(
      fs.createReadStream("./video.mp4"),
      zlib.createGzip(),
      fs.createWriteStream("./video-pipeline-promise.mp4.gz")
    );
    console.log("Pipeline succeeded");
  } catch (error) {
    console.error("Pipeline failed", err);
  }
};

run();
