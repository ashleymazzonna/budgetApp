//jshint esversion: 6
//BUDGET Controller (Data Module) - Independent/Stand Alone
var budgetController = (function () {

    var Expense = function (id, description, value) {

        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        total: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function (type, des, val) {
            var newItem, ID;
            ID = 0;

            // [1 2 3 4 5], Next ID = 6 -- not ideal bc we will be deleting Items 
            // [1 2 4 6 8], Next ID = 9 -- we want the next number to be....
            //ID to be equal to last ID plus 1 

            // Create new item based on 'inc' or 'exp' type

            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;

            } else {
                ID = 0;
            }

            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // push into the data structure
            data.allItems[type].push(newItem);

            // return the new element
            return newItem;

        },

        testing: function () {
            console.log(data)
        }
    };

})();


//UI Controller - Independent/Stand Alone
var UIController = (function () {
    var DOMstrings = {

        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function () {

            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
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

    var setUpEvetListeners = function () {

        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };


    var ctrlAddItem = function () {
        var input, newItem;
        //1. Get the field input data
        var input = UICtrl.getInput();
        // console.log(input);

        //2. add the the new item to the budget controller
        newItem = budgetController.addItem(input.type, input.description, input.value);

        //3. add the item to the ui 
        //4. calculate the budget
        //5. display the budget on the ui
    }

    return {
        init: function () {
            console.log('app has started');
            // setUpEvetListeners();
        }
    }



})(budgetController, UIController);

controller.init();


