!function(e){function t(t){for(var o,l,i=t[0],s=t[1],u=t[2],d=0,g=[];d<i.length;d++)l=i[d],n[l]&&g.push(n[l][0]),n[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(c&&c(t);g.length;)g.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,i=1;i<r.length;i++){var s=r[i];0!==n[s]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var o={},n={25:0};var a=[];function l(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=o,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=s;a.push([434,0]),r()}({373:function(e,t,r){"use strict";r.r(t);r(535);var o=r(184),n=r(102),a=r(50),l=r(2),i=r(244),s=r(210),u=r(296),c=r(224),d=r(103),g=r(145),h=r(21),p=r(4),f=r(33),m=r(69),v=r(34),y=r(31),_=r(14),b=(r(196),angular.module("gmfQueryGridComponent",[i.a.module.name,s.a.name,u.a.name,c.a.module.name,d.a.module.name,g.a.module.name]));function S(e,t,r){return r(e,t)}b.value("gmfDisplayquerygridTemplateUrl",function(e,t){var r=t.gmfDisplayquerygridTemplateurl;return void 0!==r?r:"gmf/query/gridComponent"}),b.run(["$templateCache",function(e){e.put("gmf/query/gridComponent",r(433))}]),S.$inject=["$element","$attrs","gmfDisplayquerygridTemplateUrl"],b.component_={controller:"GmfDisplayquerygridController as ctrl",bindings:{active:"=?gmfDisplayquerygridActive",featuresStyleFn:"&gmfDisplayquerygridFeaturesstyle",selectedFeatureStyleFn:"&gmfDisplayquerygridSelectedfeaturestyle",getMapFn:"&gmfDisplayquerygridMap",removeEmptyColumnsFn:"&?gmfDisplayquerygridRemoveemptycolumns",maxResultsFn:"&?gmfDisplayquerygridMaxresults",maxRecenterZoomFn:"&?gmfDisplayquerygridMaxrecenterzoom",mergeTabs:"<?gmfDisplayquerygridMergetabs"},templateUrl:S},b.component("gmfDisplayquerygrid",b.component_),b.Controller_=function(e,t,r,o,n,a,l,i){var s=this,u=e.has("ngeoQueryOptions")?e.get("ngeoQueryOptions"):{};this.$scope_=t,this.$timeout_=a,this.ngeoQueryResult=r,this.ngeoMapQuerent_=o,this.ngeoCsvDownload_=l,this.$element_=i,this.maxResults=void 0!==u.limit?u.limit:50,this.active=!1,this.pending=!1,this.gridSources={},this.loadedGridSources=[],this.selectedTab=null,this.removeEmptyColumns_=!1,this.maxRecenterZoom,this.mergeTabs={},this.featuresForSources_={},this.features_=new h.b,this.ngeoFeatureOverlayMgr_=n,this.highlightFeatures_=new h.b,this.filename_=e.has("gmfCsvFilename")?e.get("gmfCsvFilename"):"query-results.csv",this.map_=null,this.$scope_.$watchCollection(function(){return r},function(e,t){e!==t&&s.updateData_()}),this.unregisterSelectWatcher_=null},b.Controller_.$inject=["$injector","$scope","ngeoQueryResult","ngeoMapQuerent","ngeoFeatureOverlayMgr","$timeout","ngeoCsvDownload","$element"],b.Controller_.prototype.$onInit=function(){this.removeEmptyColumns_=!!this.removeEmptyColumnsFn&&!0===this.removeEmptyColumnsFn(),this.maxRecenterZoom=this.maxRecenterZoomFn?this.maxRecenterZoomFn():void 0;var e=this.ngeoFeatureOverlayMgr_.getFeatureOverlay();e.setFeatures(this.features_);var t=this.featuresStyleFn();void 0!==t&&(l.a.assertInstanceof(t,_.a),e.setStyle(t));var r=this.ngeoFeatureOverlayMgr_.getFeatureOverlay();r.setFeatures(this.highlightFeatures_);var o=this.selectedFeatureStyleFn();if(void 0!==o)l.a.assertInstanceof(o,_.a);else{var n=new v.a({color:[255,0,0,.6]}),a=new y.a({color:[255,0,0,1],width:2});o=new _.a({fill:n,image:new m.a({fill:n,radius:5,stroke:a}),stroke:a,zIndex:10})}r.setStyle(o);var i=this.getMapFn;if(i){var s=i();l.a.assertInstanceof(s,f.a),this.map_=s}},b.Controller_.prototype.getGridSources=function(){var e=this;return this.loadedGridSources.map(function(t){return e.gridSources[t]})},b.Controller_.prototype.updateData_=function(){var e=this;if(0===this.ngeoQueryResult.total&&!this.hasOneWithTooManyResults_()){var t=this.active;return this.clear(),void(t&&(this.active=this.ngeoQueryResult.pending,this.pending=this.ngeoQueryResult.pending))}this.active=!0,this.pending=!1;var r=this.ngeoQueryResult.sources;Object.keys(this.mergeTabs).length>0&&(r=this.getMergedSources_(r)),r.forEach(function(t){t.tooManyResults?e.makeGrid_(null,t):(t.id=e.escapeValue(t.id),t.features.length>0&&e.collectData_(t))}),0!==this.loadedGridSources.length?null!==this.selectedTab&&""+this.selectedTab in this.gridSources||this.$timeout_(function(){var t=e.loadedGridSources[0];e.selectTab(e.gridSources[t])},0):this.active=!1},b.Controller_.prototype.hasOneWithTooManyResults_=function(){return this.ngeoQueryResult.sources.some(function(e){return e.tooManyResults})},b.Controller_.prototype.escapeValue=function(e){if(Number.isInteger(e))return e;var t=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\ |]/g;return null!==e.match(t)?e.replace(t,"_"):e},b.Controller_.prototype.isSelected=function(e){return this.selectedTab===e.source.label},b.Controller_.prototype.getMergedSources_=function(e){var t=this,r=[],o={};for(var n in e.forEach(function(e){null===t.getMergedSource_(e,o)&&r.push(e)}),o)r.push(o[n]);return r},b.Controller_.prototype.getMergedSource_=function(e,t){var r=null;for(var o in this.mergeTabs){if(this.mergeTabs[o].some(function(t){return t==e.label})){r=o;break}}if(null===r)return null;var n=void 0;return r in t?n=t[r]:(n={features:[],id:r,label:r,limit:this.maxResults,pending:!1,queried:!0,tooManyResults:!1,totalFeatureCount:void 0},t[r]=n),e.features.forEach(function(e){n.features.push(e)}),n.tooManyResults=n.tooManyResults||e.tooManyResults,n.tooManyResults&&(n.totalFeatureCount=void 0!==n.totalFeatureCount?n.totalFeatureCount+n.features.length:n.features.length,n.features=[]),void 0!==e.totalFeatureCount&&(n.totalFeatureCount=void 0!==n.totalFeatureCount?n.totalFeatureCount+e.totalFeatureCount:e.totalFeatureCount),n},b.Controller_.prototype.collectData_=function(e){var t=[],r=[],o={},n=void 0,a=void 0;(e.features.forEach(function(e){void 0!==(n=e.getProperties())&&(a=e.getGeometryName(),-1===r.indexOf(a)&&r.push(a),t.push(n),o[c.a.getRowUid(n)]=e)}),this.cleanProperties_(t,r),t.length>0)&&(this.makeGrid_(t,e)&&(this.featuresForSources_[""+e.label]=o))},b.Controller_.prototype.cleanProperties_=function(e,t){e.forEach(function(e){t.forEach(function(t){delete e[t]}),delete e.boundedBy,delete e.ngeo_feature_type_}),!0===this.removeEmptyColumns_&&this.removeEmptyColumnsFn_(e)},b.Controller_.prototype.removeEmptyColumnsFn_=function(e){var t=[],r=void 0,o=void 0;for(o in e[0])for(r=0;r<e.length;r++)if(void 0!==e[r][o]){t.push(o);break}var n=void 0;e.forEach(function(e){for(o in n=[],e)-1===t.indexOf(o)&&n.push(o);n.forEach(function(t){delete e[t]})})},b.Controller_.prototype.makeGrid_=function(e,t){var r=""+t.label,o=null;return(null===e||null!==(o=this.getGridConfiguration_(e)))&&(-1==this.loadedGridSources.indexOf(r)&&this.loadedGridSources.push(r),this.gridSources[r]={configuration:o,source:t},!0)},b.Controller_.prototype.getGridConfiguration_=function(e){l.a.assert(e.length>0);var t={};Object.assign(t,e[0]),delete t.ol_uid;var r=[];return Object.keys(t).forEach(function(e){r.push({name:e})}),r.length>0?new c.a(e,r):null},b.Controller_.prototype.clear=function(){this.active=!1,this.pending=!1,this.gridSources={},this.loadedGridSources=[],this.selectedTab=null,this.tooManyResults=!1,this.features_.clear(),this.highlightFeatures_.clear(),this.ngeoMapQuerent_.clear(),this.featuresForSources_={},this.unregisterSelectWatcher_&&this.unregisterSelectWatcher_()},b.Controller_.prototype.selectTab=function(e){var t=this,r=e.source;this.selectedTab=r.label,this.unregisterSelectWatcher_&&(this.unregisterSelectWatcher_(),this.unregisterSelectWatcher_=null),null!==e.configuration&&(this.unregisterSelectWatcher_=this.$scope_.$watchCollection(function(){return e.configuration.selectedRows},function(e,r){Object.keys(e)!==Object.keys(r)&&t.onSelectionChanged_()})),this.updateFeatures_(e),this.reflowGrid_()},b.Controller_.prototype.reflowGrid_=function(){var e=this.escapeValue(this.selectedTab||""),t=this.$element_.find("div.tab-pane#"+e);t.removeClass("active").addClass("active"),this.$timeout_(function(){t.find("div.ngeo-grid-table-container table").trigger("reflow")})},b.Controller_.prototype.onSelectionChanged_=function(){if(null!==this.selectedTab){var e=this.gridSources[""+this.selectedTab];this.updateFeatures_(e)}},b.Controller_.prototype.updateFeatures_=function(e){if(this.features_.clear(),this.highlightFeatures_.clear(),null!==e.configuration){var t=""+e.source.label,r=this.featuresForSources_[t],o=e.configuration.selectedRows;for(var n in r){var a=r[n];n in o?this.highlightFeatures_.push(a):this.features_.push(a)}}},b.Controller_.prototype.getActiveGridSource=function(){return null===this.selectedTab?null:this.gridSources[""+this.selectedTab]},b.Controller_.prototype.isOneSelected=function(){var e=this.getActiveGridSource();return null!==e&&null!==e.configuration&&e.configuration.getSelectedCount()>0},b.Controller_.prototype.getSelectedRowCount=function(){var e=this.getActiveGridSource();return null===e||null===e.configuration?0:e.configuration.getSelectedCount()},b.Controller_.prototype.selectAll=function(){var e=this.getActiveGridSource();null!==e&&e.configuration.selectAll()},b.Controller_.prototype.unselectAll=function(){var e=this.getActiveGridSource();null!==e&&e.configuration.unselectAll()},b.Controller_.prototype.invertSelection=function(){var e=this.getActiveGridSource();null!==e&&e.configuration.invertSelection()},b.Controller_.prototype.zoomToSelection=function(){if(null!==this.getActiveGridSource()){var e=p.j();this.highlightFeatures_.forEach(function(t){p.q(e,t.getGeometry().getExtent())});var t=this.map_.getSize();l.a.assert(void 0!==t);var r=this.maxRecenterZoom;this.map_.getView().fit(e,{size:t,maxZoom:r})}},b.Controller_.prototype.downloadCsv=function(){var e=this.getActiveGridSource();if(null!==e){var t=e.configuration.columnDefs;l.a.assert(void 0!==t);var r=e.configuration.getSelectedRows();this.ngeoCsvDownload_.startDownload(r,t,this.filename_)}},b.controller("GmfDisplayquerygridController",b.Controller_);var C=b,w=r(25),F=r(297),M=r(144),R=r(129),x=r(56),G=r(177),T=r(178),O=r(46),k=r(30),q=r(54),D={};D.module=angular.module("gmfapp",["gettext",o.a.module.name,n.a.name,a.a.name,C.name,w.a.module.name,F.a.name,M.a.name,R.a.name,G.a.name,T.a.name]),D.module.constant("ngeoQueryOptions",{limit:20,queryCountFirst:!0}),D.module.constant("gmfTreeUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/themes?version=2&background=background"),D.module.constant("defaultTheme","Demo"),D.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),D.queryresultComponent={controller:"gmfappQueryresultController",template:r(350)},D.module.component("gmfappQueryresult",D.queryresultComponent),D.QueryresultController=function(e){this.result=e},D.QueryresultController.$inject=["ngeoQueryResult"],D.module.controller("gmfappQueryresultController",D.QueryresultController),D.MainController=function(e,t,r){var o=this;e.loadThemes();var n=new v.a({color:[255,170,0,.6]}),a=new y.a({color:[255,170,0,1],width:2});this.featureStyle=new _.a({fill:n,image:new m.a({fill:n,radius:5,stroke:a}),stroke:a}),this.map=new f.a({layers:[new k.a({source:new q.a})],view:new O.a({projection:x.a,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:3})}),t.setDatasourceMap(this.map),this.themes=void 0,this.treeSource=void 0,this.queryActive=!0,this.queryGridActive=!0,e.getThemesObject().then(function(e){e&&(o.themes=e,o.treeSource=e[3])}),r.init(this.map)},D.MainController.$inject=["gmfThemes","gmfDataSourcesManager","ngeoFeatureOverlayMgr"],D.module.controller("MainController",D.MainController);t.default=D},433:function(e,t){e.exports='<div class="gmf-displayquerygrid panel" ng-show=ctrl.active> <div class=close ng-click=ctrl.clear()> &times; </div> <ul class="nav nav-pills small" role=tablist> <li ng-repeat="gridSource in ctrl.getGridSources() track by gridSource.source.label" role=presentation ng-class="{\'active\' : ctrl.isSelected(gridSource)}" ng-click=ctrl.selectTab(gridSource)> <a href=#{{ctrl.escapeValue(gridSource.source.label)}} data-target=#{{ctrl.escapeValue(gridSource.source.label)}} aria-controls={{ctrl.escapeValue(gridSource.source.label)}} role=tab data-toggle=tab> <span ng-if="gridSource.source.tooManyResults !== true"> {{gridSource.source.label | translate}} ({{gridSource.source.features.length}}) </span> <span ng-if="gridSource.source.tooManyResults === true"> {{gridSource.source.label | translate}} ({{gridSource.source.totalFeatureCount}}*) </span> </a> </li> </ul> <div class=tab-content> <div ng-repeat="gridSource in ctrl.getGridSources() track by gridSource.source.label" role=tabpanel class=tab-pane ng-class="{\'active\' : ctrl.isSelected(gridSource)}" id={{ctrl.escapeValue(gridSource.source.label)}}> <ngeo-grid ngeo-grid-configuration=gridSource.configuration ng-if="gridSource.source.tooManyResults !== true"> </ngeo-grid> <div ng-if="gridSource.source.tooManyResults === true"> <div class="gmf-displayquerygrid-message alert alert-warning"> <p><span translate>The results can not be displayed because the maximum number has been reached</span> ({{gridSource.source.limit}}).</p> <p translate>Please refine your query.</p> </div> </div> </div> </div> <div class=navbar ng-show="!ctrl.pending && ctrl.getActiveGridSource() && ctrl.getActiveGridSource().configuration !== null"> <ul class="nav navbar-nav navbar-right"> <li class="small ng-hide" ng-show=ctrl.isOneSelected()> <p class="navbar-text ng-binding"> {{ctrl.getSelectedRowCount()}} <span translate>selected element(s)</span> </p> </li> <li ng-show=ctrl.isOneSelected() class=ng-hide> <button class="btn btn-link btn-xs" title="{{\'Zoom to selection\' | translate}}" ng-click=ctrl.zoomToSelection()> <i class="fa fa-search-plus"></i> <span translate>Zoom to</span> </button> </li> <li ng-show=ctrl.isOneSelected() class=ng-hide> <button class="btn btn-link btn-xs" title="{{\'Export selection as CSV\' | translate}}" ng-click=ctrl.downloadCsv()> <i class="fa fa-download"></i> <span translate>Export as CSV</span> </button> </li> <li class="dropdown navbar-link dropup"> <button type=button class="dropup btn btn-default btn-xs" data-toggle=dropdown aria-haspopup=true aria-expanded=false> <span translate>Select</span> <span class=caret></span> </button> <ul class=dropdown-menu aria-labelledby=dLabel> <li> <a href="" ng-click=ctrl.selectAll() translate>All</a> </li> <li> <a href="" ng-click=ctrl.unselectAll() translate>None</a> </li> <li> <a href="" ng-click=ctrl.invertSelection() translate>Reverse selection</a> </li> </ul> </li> </ul> </div> <div ng-show=ctrl.pending class=gmf-displayquerygrid-pending> <span class="fa fa-spinner fa-spin"></span> </div> </div> '},434:function(e,t,r){r(75),r(74),e.exports=r(373)},535:function(e,t){}});
//# sourceMappingURL=displayquerygrid.5fb955cd5cfd5dca7299.js.map