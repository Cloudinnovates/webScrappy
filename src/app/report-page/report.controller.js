import Rx from 'rxjs/Rx';
import _ from 'lodash';

export class ReportController {
  constructor ($log, $http, $stateParams, $state) {
    'ngInject';

    const vm = this;

    vm.h = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    vm.analysisDone = false;

    vm.brokenLinksCount = 0;

    //If no pageData available in the params and redirect to home
    if(!$stateParams.pageData){
      $state.go('home');
    }

    vm.pageData = $stateParams.pageData;

    vm.brokenLinks = (link) => {
      return link.status != 200;
    };

    let externalLinks = vm.pageData.links.external.data;

    //Quick request to get the status of the links
    let getHeaders = (link) => $http.head(link);


    //Updating the status
    let updateStatus = (res) => {

      let url = res.config.url;
      let externalLinksArray = vm.pageData.links.external.data;

      vm.pageData.links.external.data[_.findIndex(externalLinksArray, {url: url})].status = res.status;

      if(res.status != 200){
        vm.brokenLinksCount++;
      }

    };

    let statusUpdateDone = () => {
      vm.analysisDone = true;
    };

    //Create a stream of externalLinks array
    let response$ = Rx.Observable.from(externalLinks)
      .mergeMap((link) => Rx.Observable.fromPromise(getHeaders(link.url))
        .catch(error => Rx.Observable.of(error)));


    //Subscribing to the stream of responses of the header request.
    response$.subscribe(updateStatus, err => $log.info("Error",err), statusUpdateDone);

  }

}
