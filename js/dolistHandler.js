// document variables pt.2
var form = document.getElementById("form");
var listInput = document.getElementById("inputNewDo");
var list = document.getElementById("list");
var listID = 0;
var selector = document.getElementById("slct");
var taskItemsArray = [];

//check listID against localStorage
function getListID(){
    if(localStorage.getItem("listID") != null){
        listID = localStorage.getItem("listID");
    }else{
        listID = 1;
    }
}


//call function on submit
function addNewToDo() {
    console.log("Submit detected.");

    getListID();

    if (listInput.value == "") {
        //Do Nothing
        console.log("Blank input submitted or urgency not selected. Do nothing.")
    } else {
        //get input values
        var todoTxt = listInput.value;
        var selValue = selector[selector.selectedIndex].value;

        //arrange into JSON
        var taskItemObj = {
            id: listID,
            task: todoTxt,
            urgency: selValue,
            completed: "false"
        }
        console.log("taskItemObj: " + JSON.stringify(taskItemObj));

        //check if localstorage taskItemsArray exists already
        if(localStorage.getItem("taskItemsArray") != null){
            //if so populate blank taskItemsArray variable
            taskItemsArray = JSON.parse(localStorage.getItem("taskItemsArray"));
            console.log("initial taskItemsArray: " + JSON.stringify(taskItemsArray));
        }

        //add taskItemObj to taskItemsArray
        taskItemsArray.push(taskItemObj);
        console.log("new taskItemsArray: " + JSON.stringify(taskItemsArray));

        //save taskItemsArray to localstorage
        localStorage.setItem("taskItemsArray", JSON.stringify(taskItemsArray));

        //call displayDoList function
        displayDoList();

        //increment listID
        listID++;
        console.log("listID++: "+listID);
        //save listID to localstorage
        localStorage.setItem("listID", listID);

    }
}

//call function to show dolist items
function displayDoList(){
    //make tempItemsArray
    var tempItemsArray = JSON.parse(localStorage.getItem("taskItemsArray"));
    console.log("tempItemsArray: " + JSON.stringify(tempItemsArray));
    //console.log("sorted tempItemsArray: " + JSON.stringify(sortByKey(tempItemsArray, "urgency")));
    tempItemsArray = sortByKey(tempItemsArray, "urgency");

    while(list.firstChild){
        list.removeChild(list.firstChild);
    }

    if(tempItemsArray != null){
        //go through items array with for loop
        for(i = 0; i < tempItemsArray.length; i++){
            //make a newItem variable to hold html markup for each task item
            var newItem = "<li id='" + tempItemsArray[i].id + "' class='hoverReveal pos-relative'>" + tempItemsArray[i].task + "<input type='checkbox' id='checkbox" + tempItemsArray[i].id + "' name='checkbox" + tempItemsArray[i].id + "' value=''><label class='" + tempItemsArray[i].urgency + "' for='checkbox" + tempItemsArray[i].id + "'><span><!-- Span to be used to create checkbox styling --></span></label><a href='#' class='close' id='close'></li>";
            //insert newItem to list element
            list.insertAdjacentHTML('beforeend', newItem);
            //reset the form element
            form.reset();
        }
    }else{
        //do nothing
        console.log("Nothing found in tempItemsArray.")
    }
}

//function to sort through array by the key of an object
function sortByKey(array, key){
    return array.sort(function(a,b){
        var x = a[key];
        var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

//function call to delete an item from dolist
function deleteByValue(value){
    console.log("value to delete by: " + value);
    //make deleteFromItemsArray
    var deleteFromItemsArray = JSON.parse(localStorage.getItem("taskItemsArray"));

    //go through items array with for loop
    for(i = 0; i < deleteFromItemsArray.length; i++){
        if(deleteFromItemsArray[i].id == value){
            console.log("This is the object to delete here");
            deleteFromItemsArray.splice(i, 1);
        }
    }

    console.log("deleteFromItemsArray after delete: " + JSON.stringify(deleteFromItemsArray));
    //save taskItemsArray to localstorage
    localStorage.setItem("taskItemsArray", JSON.stringify(deleteFromItemsArray));
}