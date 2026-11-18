const profile = {
  userName: 'Vasanth',
  greet: () => {
    console.log(`Hi, I'm ${this.userName}`);
  },
  welcome: function() {
    console.log(`Welcome, ${this.userName}`);
  }
};

const friend = { userName: 'Candidate' };

profile.greet.call(friend); 
profile.welcome.call(friend);

// Output: 
// Hi, I'm undefined
// Welcome Candidate

// The context of this in arrow function takes takes the this of its surrounding lexical scope
// But the context of this in normal function takes the this of the caller