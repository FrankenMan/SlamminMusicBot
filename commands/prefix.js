// Generated by newcommand.js
exports.aliases = [];

exports.execute = function(bot, msg, suffix){
  return new Promise((resolve, reject) => {
    if(!suffix){
      msg.channel.sendMessage(`The prefix here is \`${bot.getPrefix(msg)}\``).then(resolve).catch(reject);
    }else{
      var prefix = suffix.split(" ")[0];
      bot.setPrefix(msg, prefix).then(resolve).catch(reject);
    }
  });
}