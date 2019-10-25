console.log(document.querySelectorAll('td.checkbox input:checked').length);


var allBoxes = document.querySelectorAll('td.checkbox input');
var filteredBoxes = [];

// Makes an array out of the nodelist as well as removing the invisible 'dummy-checkbox's.
for(let i = 0; i < allBoxes.length; i++) {
    if(!allBoxes[i].classList.contains('dummy-checkbox')){
        filteredBoxes.push(allBoxes[i]);
    }
}


// Returns an array, 0 for unchecked, 1 for checked.
var indexes = filteredBoxes.map(function(box){
    if(box.checked){
        return 1;
    }else{
        return 0;
    }
});

// copy to clipboard.
copy(JSON.stringify(indexes));

// go on other page, store the copied indexes in a variable called indexes.
// Run the following to check-in everything from the array on the page!
for(let i = 0; i < filteredBoxes.length; i++) {
    if(filteredBoxes[i].checked == false && indexes[i] == 1){
        filteredBoxes[i].checked = true;
    }
}


// Optional
// Create an indexes of checked from both and check if the second has checked in all the ones the first one has.
var arraysMatch = function (arr1, arr2) {
    // Check if the arrays are the same length
    if (arr1.length !== arr2.length) return false;

    // Check if all items exist and are in the same order
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] == 1 && arr2[i] == 0){
            return false;
        }
    }

    // Otherwise, return true
    return true;
};