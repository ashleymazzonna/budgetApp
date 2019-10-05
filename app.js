//BUDGET DATA MODULE - Independent/Stand Alone
var budgetController = (function () {
    var x = 23

    var add = function (a) {

    }

    return {
        publicTest: function (b) {
            console.log(add(b));
        }
    }

})();


//UI MODULE - Independent/Stand Alone
var UIController = (function () {

})();


// APP CONTROLLER -connects the UI and Data Module (ex: reads data from the UI and adds that data as a new expenses in the budgetController 
var controller = (function (budgetCtrl, UICtrl) {

})(budgetController, UIController);


