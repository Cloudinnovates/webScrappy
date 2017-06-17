export function config ($logProvider, toastrConfig, $locationProvider, $uiViewScrollProvider) {
  'ngInject';

  // Enable log
  $logProvider.debugEnabled(true);

  //Enable HTML5 Url
  $locationProvider.html5Mode(true);

  //Scroll To Top on Route Change
  $uiViewScrollProvider.useAnchorScroll();

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;
}
