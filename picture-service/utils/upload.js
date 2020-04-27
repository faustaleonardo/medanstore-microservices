const AWS = require('aws-sdk');
const multer = require('@koa/multer');
const multerS3 = require('multer-s3');

const s3Config = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  Bucket: process.env.S3_BUCKET,
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
    cb(null, true);
  else cb(null, false);
};

const multerS3Config = multerS3({
  s3: s3Config,
  bucket: process.env.S3_BUCKET,
  metadata(req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key(req, file, cb) {
    cb(null, new Date().getTime() + '-' + file.originalname);
  },
});

module.exports = multer({
  storage: multerS3Config,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});
