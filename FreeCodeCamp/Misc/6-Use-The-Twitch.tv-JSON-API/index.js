$(document).ready(() => {
  /**
   * a sample list of users
   * @type {string[]}
   */
  var userList = [
    "ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "storbeck",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas"
  ];
  
  /**
   * create and init the Users model
   * @type {Object}
   * @param {string[]} userList - an array of user names
   */
  Users = new Users(userList);

  /**
   * start refreshing data after a short delay
   * @param {function} function - a funciton to run after the delay
   * @param {number} milliseconds - a delay
   */
  setTimeout(refresh, 500);
});
  
$('#all').on('click', () => {
  $('#all div').addClass('selected');
  $('#online div').removeClass('selected');
  $('#offline div').removeClass('selected');
  Users.visibility = 'all';
  Users.updateUI();
});

$('#online').on('click', () => {
  $('#all div').removeClass('selected');
  $('#online div').addClass('selected');
  $('#offline div').removeClass('selected');
  Users.visibility = 'online';
  Users.updateUI();
});

$('#offline').on('click', () => {
  $('#all div').removeClass('selected');
  $('#online div').removeClass('selected');
  $('#offline div').addClass('selected');
  Users.visibility = 'offline';
  Users.updateUI();
});

$('#search input').keyup($.debounce(250, function(e) {
  Users.filter = $(this).val();
  Users.updateUI();
}));

/**
  * A User model
  */
class User {
  /**
   * @typedef {Object} User
   * @property {string} name - the user's name
   * @property {string} logo - the user's logo url
   * @property {string} status - streaming status (ie online|offline)
   * @property {string} title - the stream's title
   * @property {string} link - the stream's url
   */
  constructor(name, logo) {
    this.name = name;
    this.logo = logo;
    this.status;
    this.title;
    this.link;
  }
}

/**
 * A collection of Users
 */
class Users {
  /**
   * @typedef {Object} Users
   * @property {User[]} users - an array of User[s]
   * @property {string} visibility - all|online|offline filter
   * @property {string} filter - text input filter
   */
  constructor(users) {
    this.users = [];
    this.visibility = 'all';
    this.filter = '';
    if (users) {
      users.map((name) => {
        this.addUser(name);
      });
    }
  }

  /**
   * List the users
   * @return {User[]} The list of users.
   */
  list() {
    return this.users;
  }
  
  /**
   * Add a user
   * @param {string} name - the name of the user 
   */
  addUser(name) {
    for(var i=0; i < this.users.length; i++){
      if (this.users[i].name === name) { 
        console.log("User: " + name + ' already exists.');
        return;
      }
    }
    // fetch the user logo
    $.getJSON(`https://wind-bow.gomix.me/twitch-api/channels/${name}?callback=?`, (data) => {
      // console.log(data);
      var logo = data.logo;
      this.users.push(new User(name, logo));
    });
  }
  
  /**
   * Get a user
   * @param {string} name - the name of the user
   * @return {Object} A User from the list
   */
  getUser(name) {
    return this.users.filter((user) => {
      return user.name === name; 
    })
  }
  
  /**
   * Update the status of all the users
   */
  update() {
    // console.log(this.users);
    this.users.map((user) => {
      $.getJSON(`https://wind-bow.gomix.me/twitch-api/streams/${user.name}?callback=?`, (data) => {
        // console.log(data);
        user.status = (data.stream != null) ? 'online' : 'offline';
        user.title = (data.stream != null) ? data.stream.channel.status : null;
        user.link = (data.stream != null) ? data.stream.channel.url : null;
        this.updateUI();
      })
    });
  }
  
  /**
   * Update the UI with the new data/settings
   */
  updateUI() {
    var users;
    if (this.filter) {
      users = this.users.filter((user) => {
        return user.name.toLowerCase().startsWith(this.filter.toLowerCase());
      });
    } else { 
      users = this.users;
    }
    
    var html = '';
    for (var i=0; i < users.length; i++) {
      if(this.visibility === 'all' || this.visibility === 'online') {
        if(users[i].status === 'online') {
          html += `
            <div class="row online">
              <div class="col-xs-3 col-sm-3 col-md-3">
                <img class="logo" src="${users[i].logo}">
              </div>
              <div class="col-xs-7 col-sm-7 col-md-7">
                <a href="${users[i].link}" target="_blank">
                  <h4 class="name">${users[i].name}</h4>
                  <h5 class="title">${users[i].title}</h5>
                </a>
              </div>
              <div class="col-xs-2 col-sm-2 col-md-2 status">
                <i class="fa fa-check fw"></i>
              </div>
            </div>
          `;
        }
      }
      if(this.visibility === 'all' || this.visibility === 'offline') {
        if(users[i].status === 'offline') {
          html += `
            <div class="row offline">
              <div class="col-xs-3 col-sm-3 col-md-3">
                <img class="logo" src="${users[i].logo}">
              </div>
              <div class="col-xs-7 col-sm-7 col-md-7">
                <h4 class="name">${users[i].name}</h4>
              </div>
              <div class="col-xs-2 col-sm-2 col-md-2 status">
                <i class="fa fa-close fw"></i>
              </div>
            </div>
          `;
        }
      }
    }
    $('#users').html(html);
  }
}

/**
 * Refresh user data by polling at a predefined interval
 */
function refresh() {
  Users.update();
  setTimeout(refresh, 30000);  
}
