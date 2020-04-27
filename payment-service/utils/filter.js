exports.filterFields = (body, acceptedFields) => {
  let fields = {};

  for (let fieldName of acceptedFields) {
    if (body[fieldName]) fields[fieldName] = body[fieldName];
  }

  return fields;
};
