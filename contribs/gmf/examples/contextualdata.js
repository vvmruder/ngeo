/**
 * @module gmfapp.contextualdata
 */
const exports = {};

import './contextualdata.css';
/** @suppress {extraRequire} */
import gmfContextualdataModule from 'gmf/contextualdata/module.js';

import gmfMapComponent from 'gmf/map/component.js';
import ngeoMiscFilters from 'ngeo/misc/filters.js';
import EPSG21781 from 'ngeo/proj/EPSG21781.js';
import olMap from 'ol/Map.js';
import olView from 'ol/View.js';
import olLayerTile from 'ol/layer/Tile.js';
import olSourceOSM from 'ol/source/OSM.js';


/** @type {!angular.Module} **/
exports.module = angular.module('gmfapp', [
  'gettext',
  gmfContextualdataModule.name,
  gmfMapComponent.name,
  ngeoMiscFilters.name,
]);


exports.module.value(
  'gmfRasterUrl',
  'https://geomapfish-demo.camptocamp.com/2.3/wsgi/raster');

exports.module.value(
  'gmfContextualdatacontentTemplateUrl',
  'partials/contextualdata.html');

exports.module.constant('defaultTheme', 'Demo');
exports.module.constant('angularLocaleScript', '../build/angular-locale_{{locale}}.js');


/**
 * @constructor
 * @ngInject
 */
exports.MainController = function() {
  /**
   * @type {ol.Map}
   * @export
   */
  this.map = new olMap({
    layers: [
      new olLayerTile({
        source: new olSourceOSM()
      })
    ],
    view: new olView({
      projection: EPSG21781,
      resolutions: [200, 100, 50, 20, 10, 5, 2.5, 2, 1, 0.5],
      center: [600000, 200000],
      zoom: 3
    })
  });
};


/**
 * @param {ol.Coordinate} coordinate The coordinate for the right-clicked
 *     point.
 * @param {Object} data The data received from the raster service.
 * @return {Object} The additional data to add to the scope for the
 *     contextualdata popover.
 */
exports.MainController.prototype.onRasterData = function(coordinate, data) {
  return {
    'elelvation_diff': data['srtm'] - data['aster']
  };
};

exports.module.controller('MainController', exports.MainController);


export default exports;
