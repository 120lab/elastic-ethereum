var onInit = function() {
}

var onCreate = function() {
}

var getDeletes = function(log) {

  return {}
}

var getDocuments = function(log) {

  var hash = log.data;
  var message = contract.getMessage(hash);
  var document = {};
  document[hash] = {body: message[2]};

  return {
    message: document
  };
}

module.exports = {
  onInit: onInit,
  onCreate: onCreate,
  getDeletes: getDeletes,
  getDocuments: getDocuments
};

