
//BUDGET Controller (Data Module) - Independent/Stand Alone
var budgetController = (function () {

    // Code 

})();


//UI Controller - Independent/Stand Alone
var UIController = (function () {
    var DOMstrings = {

        inputType = '.add__type',
        inputDescription = '.add__description',
        inputValue = '.add__value'
    }

    return {
        getInput: function () {

            return {
                type: document.querySelector(DOMstrings.input).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function () {
            return DOMstrings;
        }
    };

})();


// Global APP Controller -connects the UI and Data Module (ex: reads data from the UI and adds that data as a new expenses in the budgetController 
var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {

        //1. Get the field input data
        var input = UICtrl.getInput();
        console.log(input);

        //2. add the the new item to the budget controller
        //3. add the item to the ui 
        //4. calculate the budget
        //5. display the budget on the ui

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
})(budgetController, UIController);


