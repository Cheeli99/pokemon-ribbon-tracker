// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('tr');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'INPUT') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Select all check boxes : Setting the checked property to true in checkAll() function
function checkAll(){
  var items = document.getElementsByName('ribbon');
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == 'checkbox')
            items[i].checked = true;
    }
}
// Clear all check boxes : Setting the checked property to false in uncheckAll() function
function uncheckAll(){
  var items = document.getElementsByName('ribbon');
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == 'checkbox')
            items[i].checked = false;
    }
}