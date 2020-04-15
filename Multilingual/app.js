import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-translate';

// Import your app stylesheets
import './style.css';

// Import your app functionality
import './shared'
import './sign-in'

// Create and bootstrap application
const requires = [
  'ui.router',
  'pascalprecht.translate',
  'shared',
  'signIn'
];

window.app = angular.module('app', requires);

var enTranslations = {
 
  "BUTTON_LANG_DE": "German",
  "BUTTON_LANG_EN": "English",
  "SIGN_IN": {
    "PAGE_TITLE": "Sign In",
    "USERNAME_FIELD_LABEL": "Username",
    "PASSWORD_FIELD_LABEL": "Password",
    "SIGN_IN_BUTTON": "Sign In",
    "SIGN_IN_GUEST_BUTTON": "Sign in as guest",
    "FORGOT_PASSWORD": "Forgot your password?",
   
  }
}

var deTranslations = {
 
  "BUTTON_LANG_DE": "Deutsch",
  "BUTTON_LANG_EN": "Englisch",
  "SIGN_IN": {
    "PAGE_TITLE": "Anmelden",
    "USERNAME_FIELD_LABEL": "Nutzername",
    "PASSWORD_FIELD_LABEL": "Passwort",
    "SIGN_IN_BUTTON": "Anmelden",
    "SIGN_IN_GUEST_BUTTON": "Melde dich als Gast an",
    "FORGOT_PASSWORD": "Haben Sie Ihr Passwort vergessen?",
   
  }
}

app.config(['$translateProvider', '$urlRouterProvider', function ($translateProvider, $urlRouterProvider) {
  $translateProvider
    .translations('en', enTranslations)
    .translations('de', deTranslations)
    .fallbackLanguage('en')
    .preferredLanguage('en')
    .usePostCompiling(true);

    $urlRouterProvider.otherwise('sign-in')
}]);

angular.bootstrap(document.getElementById('app'), ['app']);