// observer pattern script
// p.40 (v1.6.2)


// observer list
function ObserverList() {
  this.observerList = [];
};

ObserverList.prototype.add = function(obj) {
  return this.observerList.push(obj);
};

ObserverList.prototype.count = function() {
  return this.observerList.length;
};

ObserverList.prototype.get = function(index) {
  if(index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

ObserverList.prototype.indexOf = function(obj, startIndex) {
  var i = startIndex;
  while(i < this.observerList.length) {
    if(this.observerList[i] === obj){
      return i;
    }
    i++;
  }
  return -1;
};

ObserverList.prototype.removeAt = function(index) {
  this.observerList.splice(index, 1);
};


// subject
function Subject() {
  this.observers = new ObserverList();
};

Subject.prototype.addObserver = function(observer) {
  this.observers.add(observer);
};

Subject.prototype.removeObserver = function(observer) {
  this.observers.removeAt(this.observers.indexOf(observer, 0));
};

Subject.prototype.notify = function(context) {
  var observerCount = this.observers.count();
  for(var i = 0; i < observerCount; i++) {
    this.observers.get(i).update(context);
  }
};


// observer
function Observer() {
  this.update = function() {
    return;
  };
}


// the rest
// extend an object with an extension
function extend(obj, extension) {
  for(let key in extension) {
    obj[key] = extension[key];
  }
};

// references to our DOM elements
var controlCheckbox = document.getElementById('mainCheckbox'),
  addBtn = document.getElementById('addNewObserver'),
  container = document.getElementById('observerContainer');

// concrete subject
// extend the controlling checkbox with the subject class
extend(controlCheckbox, new Subject());

// clicking the checkbox will trigger notifications to its observers
controlCheckbox.onclick = function() {
  controlCheckbox.notify(controlCheckbox.checked);
};

addBtn.onclick = addNewObserver;

// concrete observer
function addNewObserver() {
  // create a new checkbox to be added
  var check = document.createElement('input');
  check.type = 'checkbox';

  // extend the checkbox with the observer class
  extend(check, new Observer());

  // override with custom update behavior
  check.update = function(value) {
    this.checked = value;
  };

  // add the new observer to our list of observers
  // for our main subject
  controlCheckbox.addObserver(check);

  // append the item to the container
  container.appendChild(check);
};
