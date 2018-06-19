import Paubox from 'paubox-nodejs';

let SimplePauboxAdapter = mailOptions => {
  if (!mailOptions || !mailOptions.apiKey || !mailOptions.fromAddress) {
    throw 'SimplePauboxAdapter requires an API Key.';
  }
  if (!mailOptions || !mailOptions.apiUsername || !mailOptions.fromAddress) {
    throw 'SimplePauboxAdapter requires a username.';
  }

  Paubox.setApiKey(mailOptions.apiKey);
  Paubox.setApiUsername(mailOptions.username);

  let sendMail = ({ to, subject, text }) => {
    return new Promise((resolve, reject) => {
      paubox.send({
        from: mailOptions.fromAddress,
        to: to,
        subject: subject,
        text: text,
      }, function (err, json) {
        if (err) {
          reject(err);
        }
        resolve(json);
      });
    });
  }

  return Object.freeze({
    sendMail: sendMail
  });
}

module.exports = SimplePauboxAdapter
