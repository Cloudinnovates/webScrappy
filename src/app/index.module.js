import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { ReportController } from "./report-page/report.controller";
import { onlyBroken } from "../app/components/onlyBroken/onlyBroken.filter.js";

angular.module('webScrappy', ['ui.router', 'ngMaterial', 'ngMessages'])
  .constant('webServiceUrl', 'http://localhost:3010/')
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .controller('ReportController', ReportController)
  .directive('navbar', NavbarDirective)
  .filter('onlyBroken', onlyBroken);
