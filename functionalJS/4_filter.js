function getShortMessages(messages) {
    return messages.map(word => word.message).filter(function(obj){
      return obj.length < 50;
    });
}

module.exports = getShortMessages;
