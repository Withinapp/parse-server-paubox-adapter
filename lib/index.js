"use strict";

var _pauboxNodejs = _interopRequireDefault(require("paubox-nodejs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimplePauboxAdapter = function SimplePauboxAdapter(mailOptions) {
  if (!mailOptions || !mailOptions.apiKey || !mailOptions.fromAddress) {
    throw 'SimplePauboxAdapter requires an API Key.';
  }

  if (!mailOptions || !mailOptions.apiUsername || !mailOptions.fromAddress) {
    throw 'SimplePauboxAdapter requires a username.';
  }

  _pauboxNodejs.default.setApiKey(mailOptions.apiKey);

  _pauboxNodejs.default.setApiUsername(mailOptions.apiUsername);

  var sendMail = function sendMail(_ref) {
    var to = _ref.to,
        subject = _ref.subject,
        text = _ref.text;
    return new Promise(function (resolve, reject) {
      _pauboxNodejs.default.send({
        from: mailOptions.fromAddress,
        to: to,
        subject: subject,
        html: text
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