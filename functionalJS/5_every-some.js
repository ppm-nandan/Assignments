function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
      return submittedUsers.every(function(user){
        return goodUsers.some(function(usr){
          return usr === user;
        })
      });
    };
}

module.exports = checkUsersValid
