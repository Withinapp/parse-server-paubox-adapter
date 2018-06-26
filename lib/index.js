'use strict';

var _pauboxNodejs = require('paubox-nodejs');

var _pauboxNodejs2 = _interopRequireDefault(_pauboxNodejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimplePauboxAdapter = function SimplePauboxAdapter(mailOptions) {
  if (!mailOptions || !mailOptions.apiKey || !mailOptions.fromAddress) {
    throw 'SimplePauboxAdapter requires an API Key.';
  }
  if (!mailOptions || !mailOptions.apiUsername || !mailOptions.fromAddress) {
    throw 'SimplePauboxAdapter requires a username.';
  }

  _pauboxNodejs2.default.setApiKey(mailOptions.apiKey);
  _pauboxNodejs2.default.setApiUsername(mailOptions.apiUsername);

  var sendMail = function sendMail(_ref) {
    var to = _ref.to,
        subject = _ref.subject,
        text = _ref.text;

    return new Promise(function (resolve, reject) {
      _pauboxNodejs2.default.send({
        from: mailOptions.fromAddress,
        to: to,
        subject: subject,
        text: text
      }, function (err, json) {
        if (err) {
          reject(err);
        }
        resolve(json);
      });
    });
  };

  return Object.freeze({
    sendMail: sendMail
  });
};

module.exports = SimplePauboxAdapter;