// This page demonstrates translating in the template.
class SignInCtrl {
  constructor($scope, languageService) {
    'ngInject';
    this._languageService = languageService;
  
  }

  changeLanguage(languageKey) {
    this._languageService.changeLanguage(languageKey);
  }
}

export default SignInCtrl;