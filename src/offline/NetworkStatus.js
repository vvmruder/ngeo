goog.module('ngeo.offline.NetworkStatus');

goog.require('ngeo.misc.debounce');

/**
 * @module ngeo.offline.NetworkStatus
 */
import ngeoMiscDebounce from 'ngeo/misc/debounce.js';

class HttpInterceptor {

  /**
   * @ngInject
   * @param {angular.$q} $q The Angular $q service.
   * @param {ngeox.miscDebounce} ngeoDebounce ngeo debounce service.
   * @param {ngeoNetworkStatus} ngeoNetworkStatus ngeo network status service.
   */
  constructor($q, ngeoDebounce, ngeoNetworkStatus) {
    /**
     * @private
     * @type {!angular.JQLite}
     */
    this.$q = $q;

    /**
     * @private
     * @type {ngeox.miscDebounce}
     */
    this.ngeoDebounce_ = ngeoDebounce;

    /**
     * @private
     * @type {ngeoNetworkStatus}
     */
    this.ngeoNetworkStatus_ = ngeoNetworkStatus;
  }

  request(config) {
    return config;
  }
  requestError(rejection) {
    return this.$q.reject(rejection);
  }
  response(response) {
    return response;
  }
  responseError(rejection) {
    this.ngeoDebounce_(() => this.ngeoNetworkStatus(), 2000, false);
    return this.$q.reject(rejection);
  }
}

const exports = class {

  /**
   * This service watches the status of network connection.
   *
   * Currently it watches every $http and $.ajax requests errors, if an error
   * occurs we wait 2 sec then we make an http request on the checker file.
   * If the checker responds that means we are online, otherwise we make a
   * 2nd request 2 sec later, if the 2nd requests failed that means we
   * are offline.
   *
   * A timeout of 1 sec is set for the checker file, so if we have a bad
   * connection, we consider we are offline.
   *
   * During offline mode we test every 2 sec if we are back online.
   *
   * @ngInject
   * @param {angular.JQLite} $document Angular document service.
   * @param {angular.$window} $window Angular window service.
   * @param {angular.$timeout} $timeout Angular timeout service.
   * @param {angular.Scope} $rootScope The root scope.
   */
  constructor($document, $window, $timeout, $rootScope) {

    /**
     * @private
     * @type {!angular.JQLite}
     */
    this.$document_ = $document;

    /**
     * @private
     * @type {!Window}
     */
    this.$window_ = $window;

    /**
     * @private
     * @type {!Window}
     */
    this.$timeout_ = $timeout;

    /**
     * @private
     * @type {angular.Scope}
     */
    this.$rootScope_ = $rootScope;

    /**
     * @private
     * @type {!number}
     */
    this.count_ = 0;

    /**
     * @type {!boolean|undefined}
     */
    this.offline;

    /**
     * @private
     * @type {!angular.$q.Promise}
     */
    this.promise_;

    this.initialize_();

  }

  initialize_() {
    this.offline = !this.$window_.navigator.onLine;

    // airplane mode, works offline(firefox)
    this.$window_.addEventListener('offline', () => {
      this.triggerChangeStatusEvent_(true);
    });

    // online event doesn't means we have a internet connection, that means we
    // have possiby one (connected to a router ...)
    this.$window_.addEventListener('online', () => {
      this.check();
    });

    // We catch every $.ajax request errors or (canceled request).
    this.$document_.ajaxError((evt, jqxhr, settings, thrownError) => {
      // Filter out canceled requests
      if (!/^(canceled|abort)$/.test(thrownError)) {
        this.check(2000);
      }
    });

  }

  check(timeout) {
    if (this.promise_) {
      this.$timeout_.cancel(this.promise_);
      this.promise_ = undefined;
    }
    if (timeout) {
      this.count_++;
      this.promise_ = this.$timeout_(this.check.bind(this), timeout);
      return;
    }
    $.ajax({
      method: 'GET',
      url: '../../src/offline/component.html',
      timeout: 1000,
      success: () => {
        this.count_ = 0;
        if (this.offline) {
          this.triggerChangeStatusEvent_(false);
        }
      },
      error: () => {
        this.count_++;
        // We consider we are offline after 3 requests failed
        if (this.count_ > 2 && !this.offline) {
          this.triggerChangeStatusEvent_(true);
        }
      }
    });

  }

  /**
   * @private
   */
  triggerChangeStatusEvent_(offline) {
    this.offline = offline;
    // this.$rootScope_.$broadcast('ngeoNetworkStatusChange', net.offline);
    this.$rootScope_.$digest();
  }

};

const name = 'ngeoNetworkStatus';

exports.module = angular.module(name, [
  ngeoMiscDebounce.name
]);
exports.module.factory('httpInterceptor', HttpInterceptor);
exports.module.service(name, exports);
exports.module.config(function($httpProvider) {
  $httpProvider.interceptors.push('httpInterceptor');
});


export default exports;
