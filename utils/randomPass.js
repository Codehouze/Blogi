exports.randomPassword = (max, min) => {
  var passwordChars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";
  var randPwLen = Math.floor(Math.random() * (max - min + 1)) + min;
  var randPassword = Array(randPwLen)
    .fill(passwordChars)
    .map(function (x) {
      return x[Math.floor(Math.random() * x.length)];
    })
    .join("");
  return randPassword;
};

exports.randomString = (len, charSet) => {
  charSet =
    charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var randomString = "";
  for (var i = 0; i < len; i++) {
    var randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += 'Nv_tx_ref' + charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
};

exports.parseJwt = (token) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  return JSON.parse(atob(base64));
};

// exports.capitalize = (str) => {

//   return str.charAt(0).toUpperCase() + str.slice(1);
// };
// const caps = str.split(" ").map(capitalize).join(" ");
//  caps; // 'Captain Picard'

//  console.log(caps);