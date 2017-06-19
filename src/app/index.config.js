export function config ($logProvider, $locationProvider, $uiViewScrollProvider) {
  'ngInject';

  // Enable log
  $logProvider.debugEnabled(true);

  //Enable HTML5 Url
  $locationProvider.html5Mode(true);

  //Scroll To Top on Route Change
  $uiViewScrollProvider.useAnchorScroll();

}
