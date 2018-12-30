var addButton = document.getElementById('add-item-btn');
var container = document.getElementById('items');
var rightContainter = document.getElementById('fast-add-cont');

if(addButton){
addButton.addEventListener('click', addItem);
};

// Delete item from list
container.addEventListener('click', removeItem);

function removeItem(e){
    if(e.target.classList.contains('btn-danger')){
        e.target.parentElement.className = 'transform';
        var li = e.target.parentElement;
        container.removeChild(li);
    }
}


// End 'Delete Item'


document.addEventListener('keypress', function(event){
		
    if(event.keyCode === 13) {

        addItem();
    };
    });

function addItem(){

var newItem = document.getElementById('description').value;
var newItemQty = document.getElementById('qty').value;


// Creating a qty box
var boxQty = document.createElement('div');
boxQty.className = 'box-qty';
boxQty.textContent = newItemQty;


// creating a delete button
var deleteBtn = document.createElement('button');
deleteBtn.className = 'btn btn-danger';
deleteBtn.appendChild(document.createTextNode('X'));


// Creating a new li element
var li = document.createElement('li');
li.className= 'list-group-name';

if(newItem !== ''){
li.appendChild(document.createTextNode(newItem + ' '));
li.appendChild(deleteBtn);

// ================NEW FETCHER========================= //
var selectQty = selectQtyOption();
li.appendChild(selectQty);
// ================================================= //

container.appendChild(li);
document.getElementById('description').value= '';
document.getElementById('qty').value = 1;
document.getElementById('description').focus();
}
}


// ADDING ITEMS FROM FAST SEARCH
var items = rightContainter.querySelectorAll('#fast-add');

Array.from(items).forEach(cur => cur.addEventListener('click',fastAdding));


function fastAdding(){

var li = document.createElement('li');
li.className= 'list-group-name';
var boxQty = document.createElement('div');
boxQty.className = 'box-qty';
boxQty.value = 1;

// ================NEW FETCHER========================= //
var selectQty = selectQtyOption();
li.appendChild(selectQty);
// ================================================= //

var deleteBtn = document.createElement('button');
deleteBtn.className = 'btn btn-danger';
deleteBtn.appendChild(document.createTextNode('X'));

li.appendChild(document.createTextNode(this.nextElementSibling.textContent));   
li.appendChild(deleteBtn);

container.appendChild(li);
}

function selectQtyOption() {
    var newItemQty = 1;
    var selectQty = document.createElement('select');
    selectQty.className = 'select-qty-btn';
    var option1 = document.createElement('option');
    var option2 = document.createElement('option');
    var option3 = document.createElement('option');
    var option4 = document.createElement('option');
    var option5 = document.createElement('option');
    option1.textContent = 1;
    option2.textContent = 2;
    option3.textContent = 3;
    option4.textContent = 4;
    option5.textContent = 5;

    selectQty.appendChild(option1);
    selectQty.appendChild(option2);
    selectQty.appendChild(option3);
    selectQty.appendChild(option4);
    selectQty.appendChild(option5);
    selectQty.value = newItemQty;
    return selectQty;
}

