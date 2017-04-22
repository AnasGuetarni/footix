angular.module('starter.controllers', [])

<<<<<<< HEAD
.controller('AccCtrl', function($scope) {})

.controller('ParisCtrl', function($scope) {})

.controller('SettingsCtrl', function($scope) {})
=======
.controller('DashCtrl', function($scope) {})
>>>>>>> 3b3d5080eb4054b3b8aef409ca57b47b67b526c2

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
