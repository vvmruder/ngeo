goog.provide('gmf.AbstractController');

goog.require('gmf');
goog.require('gmf.Themes');
/** @suppress {extraRequire} */
goog.require('gmf.layertreeDirective');
/** @suppress {extraRequire} */
goog.require('gmf.mapDirective');
/** @suppress {extraRequire} */
goog.require('gmf.searchDirective');
/** @suppress {extraRequire} */
goog.require('gmf.themeselectorDirective');
goog.require('ngeo.FeatureOverlayMgr');
goog.require('ngeo.GetBrowserLanguage');
goog.require('ngeo.StateManager');
goog.require('ngeo.ToolActivate');
goog.require('ngeo.ToolActivateMgr');


/**
 * Application abstract controller.
 *
 * This file includes `goog.require` for base components/directives used
 * by the HTML page and the controller to provide the configuration.
 *
 * @param {gmfx.Config} config A part of the application config.
 * @param {angular.Scope} $scope Scope.
 * @param {angular.$injector} $injector Main injector.
 * @constructor
 * @ngInject
 * @export
 */
gmf.AbstractController = function(config, $scope, $injector) {


  goog.asserts.assertInstanceof(this.map, ol.Map);

  /**
   * A reference to the current theme
   * @type {Object}
   * @export
   */
  this.theme;

  /**
   * Themes service
   * @type {gmf.Themes}
   */
  var gmfThemes = $injector.get('gmfThemes');
  gmfThemes.loadThemes();

  /**
   * @type {Array.<gmfx.SearchDirectiveDatasource>}
   * @export
   */
  this.searchDatasources = [{
    labelKey: 'label',
    groupsKey: 'layer_name',
    groupValues: /** @type {Array.<string>} **/ ($injector.get('gmfSearchGroups')),
    groupActions: /** @type {Array.<string>} **/ ($injector.get('gmfSearchActions')),
    projection: 'EPSG:' + (config.srid || 21781),
    url: /** @type {string} **/ ($injector.get('fulltextsearchUrl'))
  }];

  /**
   * @type {boolean}
   * @export
   */
  this.leftNavVisible = false;

  /**
   * @type {boolean}
   * @export
   */
  this.rightNavVisible = false;

  /**
   * The active state of the ngeo query directive.
   * @type {boolean}
   * @export
   */
  this.queryActive = true;

  /**
   * @type {ngeo.GetBrowserLanguage}
   */
  this.getBrowserLanguage = $injector.get('ngeoGetBrowserLanguage');

  /**
   * @type {ngeo.StateManager}
   */
  this.stateManager = $injector.get('ngeoStateManager');

  /**
   * @type {angular.Scope}
   */
  this.$scope = $scope;

  /**
   * Default language
   * @type {string}
   */
  this.defaultLang = $injector.get('defaultLang');

  /**
   * Languages URL
   * @type {Object.<string, string>}
   */
  this.langUrls = $injector.get('langUrls');

  /**
   * The gettext catalog
   * @type {angularGettext.Catalog}
   */
  this.gettextCatalog = $injector.get('gettextCatalog');

  this.initLanguage();

  /**
   * The ngeo feature overlay manager service
   * @type {ngeo.FeatureOverlayMgr}
   */
  var ngeoFeatureOverlayMgr = $injector.get('ngeoFeatureOverlayMgr');
  ngeoFeatureOverlayMgr.init(this.map);

  var queryToolActivate = new ngeo.ToolActivate(this, 'queryActive');

  /**
   * The ngeo ToolActivate manager service.
   * @type {ngeo.ToolActivateMgr}
   */
  var ngeoToolActivateMgr = $injector.get('ngeoToolActivateMgr');
  ngeoToolActivateMgr.registerTool('mapTools', queryToolActivate, true);

};


/**
 * @param {string} lang Language code.
 * @export
 */
gmf.AbstractController.prototype.switchLanguage = function(lang) {
  goog.asserts.assert(lang in this.langUrls);
  this.gettextCatalog.setCurrentLanguage(lang);
  this.gettextCatalog.loadRemote(this.langUrls[lang]);
  this['lang'] = lang;
};


/**
 */
gmf.AbstractController.prototype.initLanguage = function() {
  this.$scope.$watch(goog.bind(function() {
    return this['lang'];
  }, this), goog.bind(function(newValue) {
    this.stateManager.updateState({
      'lang': newValue
    });
  }, this));

  var browserLanguage = /** @type {string|undefined} */
      (this.getBrowserLanguage(goog.object.getKeys(this.langUrls)));
  var urlLanguage = /** @type {string|undefined} */
      (this.stateManager.getInitialValue('lang'));

  if (goog.isDef(urlLanguage) &&
      goog.object.containsKey(this.langUrls, urlLanguage)) {
    this.switchLanguage(urlLanguage);
    return;
  } else if (goog.isDef(browserLanguage) &&
      goog.object.containsKey(this.langUrls, browserLanguage)) {
    this.switchLanguage(browserLanguage);
    return;
  } else {
    // if there is no information about language preference,
    // fallback to default language

    this.switchLanguage(this.defaultLang);
    return;
  }
};

gmf.module.controller('AbstractController', gmf.AbstractController);
