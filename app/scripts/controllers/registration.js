'use strict';

angular.module('hopsWorksApp')
    .controller('RegCtrl', ['AuthService', '$scope', '$location', function (AuthService, $scope, $location) {

        var self = this;

        self.newUser = {
            firstName: '',
            lastName: '',
            email: '',
            telephoneNum: '',
            chosenPassword: '',
            repeatedPassword: '',
            securityQuestion: '',
            securityAnswer: '',
            ToS: ''
        };


        self.register = function () {
            console.log(self.newUser);
            AuthService.register(self.newUser).then(function (success) {
                $location.path('/login');
            }, function (error) {
                self.errorMessage = error.data.msg;
            })
        };


        $scope.showModal = false;
        $scope.toggleModal = function () {
            $scope.showModal = !$scope.showModal;
        };


    }]);




