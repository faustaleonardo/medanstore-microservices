const AWS = require('aws-sdk');
const axios = require('axios');

const models = require('../database/models');
const { sendSuccessResponse } = require('../utils/response');

const S3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const getItemAssociated = async (itemId) => {
  try {
    const { data } = await axios.get(
      `http://35.185.178.158/item-service/${itemId}`
    );
    const item = data.data.data;
    return item;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const deleteFile = (params) => {
  return new Promise((resolve, reject) => {
    S3.deleteObject(params, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

exports.getPictures = async (ctx) => {
  const itemId = ctx.params.id;

  const item = await getItemAssociated(itemId);
  if (!item) ctx.throw(404, `Item not found`);

  const pictures = await models.Picture.findAll({
    where: { itemId },
    order: [['path', 'ASC']],
  });

  sendSuccessResponse(ctx, pictures);
};

exports.createPicture = async (ctx) => {
  const itemId = ctx.params.id;
  const paths = ctx.request.files.map((file) => file.location);
  const data = [];

  for (let path of paths) {
    data.push({ itemId, path });
  }
  const pictures = await models.Picture.bulkCreate(data, { returning: true });
  sendSuccessResponse(ctx, pictures);
};

exports.deletePictures = async (ctx) => {
  const itemId = ctx.params.id;

  const item = await getItemAssociated(itemId);
  if (!item) ctx.throw(404, `Item not found`);

  const pictures = await models.Picture.findAll({ where: { itemId } });
  try {
    // delete all pictures in S3
    for (picture of pictures) {
      const index = picture.path.lastIndexOf('/') + 1;
      const key = picture.path.slice(index);
      const params = { Bucket: process.env.S3_BUCKET, Key: key };
      await deleteFile(params);
    }

    await models.Picture.destroy({ where: { itemId } });
    sendSuccessResponse(ctx, null, 204);
  } catch (err) {
    ctx.throw(500, err);
  }
};

exports.deletePicture = async (ctx) => {
  const { id } = ctx.params;

  const picture = await models.Picture.findByPk(id);
  if (!picture) ctx.throw(404, `Picture not found`);

  // delete one picture in S3
  const index = picture.path.lastIndexOf('/') + 1;
  const key = picture.path.slice(index);
  const params = { Bucket: process.env.S3_BUCKET, Key: key };
  await deleteFile(params);

  await models.Picture.destroy({ where: { id } });
  sendSuccessResponse(ctx, null, 204);
};
