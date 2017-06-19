export class MainController {
  constructor ($http, $state) {
    'ngInject';

    const vm = this;

    vm.url = "http://";

    const webServiceUrl = 'http://localhost:3010/scrape';

    // this.urlRegex = '^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?(/.*)$';

    this.scrapPage = (url) => {

      vm.showLoader = true;
      //Create a head request and know the error in the url beforehand
      $http.head(url).then(function(){
        vm.resErr = null;
      }, function (err) {
        vm.showLoader = false;
        vm.resErr = err;
      });

      //Create a request to the webservice for scrapping
      $http.post(webServiceUrl, {url: url}).then(function(res){
        //Process only if no erro found locally.
        if(!vm.resErr)
          $state.go('report', {pageData: res.data});
      }, function () {
        vm.showLoader = false;
        //Todo
      });

    };

  }

}
