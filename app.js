'use strict';
angular.module('app', [])
    .controller('MainCtrl', mainController);

function mainController($scope) {
    $scope.userRows = 12;
    $scope.userCols = 12;
    $scope.selectedTableValue = null;

    $scope.showTable = function () {
        return $scope.userRows > 0 && $scope.userCols > 0;
    };

    $scope.getRows = function () {
        return R.range(0, $scope.userRows);
    };

    $scope.getCols = function () {
        return R.range(0, $scope.userCols);
    };

    $scope.getTableValue = function (row, col) {
        return (row+1) * (col+1);
    };

    $scope.setSelectedTableValue = function (row, col) {
        $scope.selectedTableValue  = {
            x: row + 1,
            y: col + 1,
            result: (row+1) * (col+1)
        };
    }

    $scope.resetSelectedTableValue = function () {
        $scope.selectedTableValue = null;
    }

}
