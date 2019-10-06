

//BUDGET Controller (Data Module) - Independent/Stand Alone
var budgetController = (function () {

    // some code 

})();


//UI Controller - Independent/Stand Alone
var UIController = (function () {
    // some code 
})();


// Global APP Controller -connects the UI and Data Module (ex: reads data from the UI and adds that data as a new expenses in the budgetController 
var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {

        //1. Get the field input data
        //2. add the the new item to the budget controller
        //3. add the item to the ui 
        //4. calculate the budget
        //5. display the budget on the ui
        console.log("the enter to seems to have been pressed");
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
})(budgetController, UIController);


