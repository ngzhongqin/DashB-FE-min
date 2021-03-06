'use strict';
$(document).foundation(); 
/**
 * @ngdoc overview
 * @name pssdashApp
 * @description
 * # pssdashApp
 *
 * Main module of the application.
 */
var backendHostname ='http://localhost:8080';

var app = angular
  .module('pssdashApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/tasks/all.html',
        controller: 'TasksCtrl',
        controllerAs: 'tasks'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/tasks', {
        templateUrl: 'views/tasks/all.html',
        controller: 'TasksCtrl',
        controllerAs: 'tasks'
      })
    
      .when('/mypage', {
        templateUrl: 'views/mypage/mypage.html',
        controller: 'MyPageCtrl',
        controllerAs: 'mypage'
      })
    
      .when('/tasks/new', {
        templateUrl: 'views/tasks/new.html',
        controller: 'TasksNewCtrl',
        controllerAs: 'tasksNew'
      })
      .when('/tasks/:param1', {
        templateUrl: 'views/tasks/view.html',
        controller: 'TaskViewCtrl',
        controllerAs: 'taskView'
      })

      .when('/ssls', {
        templateUrl: 'views/ssls/all.html',
        controller: 'SslCtrl',
        controllerAs: 'ssl'
      })
      .when('/ssls/new', {
        templateUrl: 'views/ssls/new.html',
        controller: 'SslNewCtrl',
        controllerAs: 'sslNew'
      })
      .when('/ssls/:param1', {
        templateUrl: 'views/ssls/view.html',
        controller: 'SslViewCtrl',
        controllerAs: 'sslView'
      })

      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'LogoutCtrl',
        controllerAs: 'logout'
      })
      .when('/change_password', {
        templateUrl: 'views/change_password.html',
        controller: 'ChangePasswordCtrl',
        controllerAs: 'change_password'
      })
    
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignUpCtrl',
        controllerAs: 'signup'
      })
    
      .when('/stat/test', {
        templateUrl: 'views/stat/test.html',
        controller: 'StatTestCtrl',
        controllerAs: 'statTest'
      })
      .when('/stat/test2', {
        templateUrl: 'views/stat/test2.html',
        controller: 'StatTest2Ctrl',
        controllerAs: 'statTest2'
      })          
      .when('/dashboard/current', {
        templateUrl: 'views/dashboard/current.html',
        controller: 'DashboardCurrentCtrl',
        controllerAs: 'dashboardCurrent'
      })
      .otherwise({
        redirectTo: '/'
      });
  });