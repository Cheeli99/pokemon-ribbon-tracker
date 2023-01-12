
/*
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('tr');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'INPUT') {
    ev.target.classList.toggle('checked');
  }
}, false);
*/

/** 
// Creates a json file with each checkbox, storing if the checkbox is checked or not
$('.custom-control-input').on('click', function() {
  var fav, favs = [];
  $('.custom-control-input').each(function() { // run through each of the checkboxes
    fav = {id: $(this).attr('id'), value: $(this).prop('checked')};
    favs.push(fav);
  });
  localStorage.setItem("ribbonList", JSON.stringify(favs));

  console.log(favs);
});

// Parses through the created json file and reasigns values to the checkboxes
$(document).ready(function() {
  var list = JSON.parse(localStorage.getItem('ribbonList'));
  if (!list.length) {return};
  console.debug(list);

  for (var i = 0; i < list.length; i++) {
    console.debug(list[i].value == 'on');
    $('#' + list[i].id ).prop('checked', list[i].value);
  }
});

function clearAll() {
  location.reload();
  localStorage.clear();
}

function addJSON() {
  
}
*/

/*
function save() {
  ribbonList = JSON.parse(localStorage.getItem('ribbonList'));
}

function save1() {
  var checkbox = document.getElementById('tableDefaultCheck1');
  localStorage.setItem('tableDefaultCheck1', checkbox.checked);
}

function load1() {
  var checked = JSON.parse(localStorage.getItem('tableDefaultCheck1'));
  document.getElementById("tableDefaultCheck1").checked = checked;
}

function load() {
  var checked = JSON.parse(localStorage.getItem('1'));
  document.getElementById("1").checked = checked;
}

// Select all check boxes : Setting the checked property to true in checkAll() function
function checkAll(){
  ribbonList = document.getElementsByName('ribbon');
    for (var i = 0; i < ribbonList.length; i++) {
        if (ribbonList[i].type == 'checkbox')
        ribbonList[i].checked = true;
    }
    completedList = ribbonList;
    console.log(completedList);
    return completedList;
}

// Clear all check boxes : Setting the checked property to false in uncheckAll() function
function uncheckAll(){
  ribbonList = document.getElementsByName('ribbon');
    for (var i = 0; i < ribbonList.length; i++) {
        if (ribbonList[i].type == 'checkbox')
        ribbonList[i].checked = false;
    }
    return ribbonList;
}

load();
*/