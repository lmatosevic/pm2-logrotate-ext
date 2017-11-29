



if (process.env.PM2_HOME)
PM2_ROOT_PATH = process.env.PM2_HOME;
else if (process.env.HOME && !process.env.HOMEPATH)
PM2_ROOT_PATH = path.resolve(process.env.HOME, '.pm2');
else if (process.env.HOME || process.env.HOMEPATH)
PM2_ROOT_PATH = path.resolve(process.env.HOMEDRIVE, process.env.HOME || process.env.HOMEPATH, '.pm2');

var WORKER_INTERVAL = isNaN(parseInt(conf.workerInterval)) ? 30 * 1000 : 
                          parseInt(conf.workerInterval) * 1000; // default: 30 secs
var SIZE_LIMIT = get_limit_size(); // default : 10MB
var ROTATE_CRON = conf.rotateInterval || "0 0 * * *"; // default : every day at midnight
var RETAIN = isNaN(parseInt(conf.retain)) ? undefined : parseInt(conf.retain); // All
var COMPRESSION = JSON.parse(conf.compress) || false; // Do not compress by default
var DATE_FORMAT = conf.dateFormat || 'YYYY-MM-DD_HH-mm-ss';
var ROTATE_MODULE = JSON.parse(conf.rotateModule) || true;
var WATCHED_FILES = [];

module.exports = {
  size_limit: 
}