export class MainController {
  constructor ($http, $state, webServiceUrl, $log) {
    'ngInject';

    const vm = this;

    //start with http:// for the url
    vm.url = "http://";

    vm.scrapPage = (url) => {

      vm.showLoader = true;

      //Create a request to the webservice for scrapping
      $http.post(webServiceUrl + 'scrap', {url: url}).then(function(res){

        if(res.status !== 200){
          vm.resErrCode = "CAN NOT REACH THE SERVER. ERROR CODE:" + res.status;
          vm.showLoader = false;
          return
        }

        if(res.data.status === 'error'){
          vm.resErrCode = res.data.code;
          vm.showLoader = false;
          return
        }

        if(res.data.status && res.data.status !== 'error'){
          vm.resErrCode = res.data.status;
          vm.showLoader = false;
          return
        }

        //No Error and Proceed to report page
        if(!vm.resErrCode && res.data){
          $state.go('report', {pageData: res.data});
        }

      }, function (err) {

        vm.showLoader = false;
        vm.resErrCode = "CAN NOT REACH THE SERVER";

        $log.debug(err);

      });

    };

  }

}
