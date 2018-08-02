// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  pushState: true,
  // App root data
  data: function() {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function() {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

app.onPageInit('search', function (page) {
  console.log(page);
 var mySearchbar = app.searchbar('.searchbar', {
    searchList: '.list-block-search',
    searchIn: '.item-title'
});   
});

app.init();

var users = [{
  name: 'admin',
  password: 'admin',
}];
// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function() {
      var username = $$('#my-login-screen [name="username"]').val();
      var password = $$('#my-login-screen [name="password"]').val();
      if (username === users[0].name && password === users[0].password) {
        // Close login screen
        app.loginScreen.close('#my-login-screen');

        // Alert username and password
        app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
       }else{
        app.dialog.alert('您的账号吗或者密码不对');
       }
});
