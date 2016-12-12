(function(){var decorator;decorator=["$delegate","$tgRepo","$tgAuth","$tgLocation","$tgNavUrls","lightboxService",function($delegate,$repo,$auth,$location,$navUrls,lightboxService){var directive;return directive=$delegate[0],directive.templateUrl="plugins/mailjet-subscription/mailjet-subscription.html",directive.compile=function(){return function($scope,$el,$attrs){var submit;return $scope.$on("deletelightbox:new",function(ctx,user){return lightboxService.open($el)}),$scope.$on("$destroy",function(){return $el.off()}),submit=function(){var params,promise,unsuscribe;return unsuscribe=$el.find("input[name='unsuscribe']").is(":checked"),params={},unsuscribe&&(params.unsuscribe=unsuscribe),promise=$repo.remove($scope.user,params),promise.then(function(data){return lightboxService.close($el),$auth.logout(),$location.path($navUrls.resolve("login"))}),promise.then(null,function(){return console.log("FAIL")})},$el.on("click",".button-green",function(event){return event.preventDefault(),lightboxService.close($el)}),$el.on("click",".button-red",window.taiga.debounce(2e3,function(event){return event.preventDefault(),submit()}))}},$delegate}],window.addDecorator("tgLbDeleteUserDirective",decorator)}).call(this),angular.module("templates").run(["$templateCache",function($templateCache){$templateCache.put("plugins/mailjet-subscription/mailjet-subscription.html",'<a href="" title="{{\'close\' | translate}}" class="close">\n  <tg-svg svg-icon="icon-close"></tg-svg></a>\n<form>\n  <h2 translate="LIGHTBOX.DELETE_ACCOUNT.CONFIRM" class="title"></h2>\n  <p translate="LIGHTBOX.DELETE_ACCOUNT.SUBTITLE" class="subtitle"></p>\n  <p ng-bind-html="\'LIGHTBOX.DELETE_ACCOUNT.BLOCK_PROJECT\' | translate"></p>\n  <div class="newsletter">\n    <input name="unsuscribe" type="checkbox" id="unsuscribe"/>\n    <label for="unsuscribe" translate="LIGHTBOX.DELETE_ACCOUNT.NEWSLETTER_LABEL_TEXT"></label>\n  </div>\n  <div class="options"><a href="" title="{{\'LIGHTBOX.DELETE_ACCOUNT.CANCEL\' | translate}}" translate="LIGHTBOX.DELETE_ACCOUNT.CANCEL" class="button-green"></a><a href="" title="{{\'LIGHTBOX.DELETE_ACCOUNT.ACCEPT\' | translate}}" translate="LIGHTBOX.DELETE_ACCOUNT.ACCEPT" class="button-red"></a></div>\n</form>')}]);