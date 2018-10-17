let initialState = [3, 3, 1];
let goalState = [0, 0, 0];
let state = [];
let killedState = [];
let iterator = true;
class CreateState { 
  constructor() {
    this.value;
    this.parent;
    this.visited;
  }
}
// Creating a root node.
var  rootNode = new CreateState();
rootNode.value = initialState;
rootNode.parent = initialState;
rootNode.visited = false;

function setup() {
  createCanvas(1000, 600);
  background(0);
  stroke(255);
  textSize(36);
  fill(255);
  text("PRESS F12 OR Ctrl+Shift+I and view the console tab.", 50, 50);
  state.push(rootNode);
  while(iterator) {
    applyOperation(state[state.length - 1])
  }    
}

function applyOperation(tempState) {
    if(tempState.visited === true) {
      state.splice(state.length - 1, 1);
    }else {
    tempState.visited = true;
    boatPosition = tempState.value[2];
    // If Boat is at the left bank
    if(boatPosition === 1) {   
      // console.log("boat is going from Left to Right"); 
      if(tempState.value[0] >= 1) {
        addState(tempState, [tempState.value[0] - 1, tempState.value[1] - 0, 0]);
      }
      if(tempState.value[0] >= 2) {
        addState(tempState, [tempState.value[0] - 2, tempState.value[1] - 0, 0]);
      }
      if(tempState.value[1] >= 2) {
        addState(tempState, [tempState.value[0] - 0, tempState.value[1] - 2, 0]);
      }
      if(tempState.value[0] >= 1 && tempState.value[1] >= 1) {
        addState(tempState, [tempState.value[0] - 1, tempState.value[1] - 1, 0]);
      }
      if(tempState.value[1] >= 1) {
        addState(tempState, [tempState.value[0] - 0, tempState.value[1] - 1, 0]);
      }            
    } else if(boatPosition === 0) {
      // If Boat is at the right bank.
      // console.log("boat is going from Right to Left") 
      if(initialState[0] - tempState.value[0] > 0) {
        addState(tempState, [tempState.value[0] + 1, tempState.value[1] + 0, 1]);
      }
      if(initialState[1] - tempState.value[1] > 0) {
        addState(tempState, [tempState.value[0] + 0, tempState.value[1] + 1, 1]);
      }
      if((initialState[0] - tempState.value[0] > 0) && (initialState[1] - tempState.value[1] > 0)) {
        addState(tempState, [tempState.value[0] + 1, tempState.value[1] + 1, 1]);
      }
      if(initialState[0] - tempState.value[0] > 2) {
        addState(tempState, [tempState.value[0] + 2, tempState.value[1] + 0, 1]);
      }
      if(initialState[1] - tempState.value[1] > 2) {
        addState(tempState, [tempState.value[0] + 0, tempState.value[1] + 2, 1]);
      }
    }
    
  }
}
console.log("These are the states to successfully complete the game.");
console.log(state);
console.log("These are all the killedStates that don't lead to the goal state.");
console.log(killedState); 

function addState(parent, value) {
  var temp = new CreateState();
  temp.value = value;
  temp.parent = parent.value;
  temp.visited = false;
  if(goalState[0] === value[0] && goalState[1] === value[1]) {
    state.push(temp);
    iterator = false;
    console.log("HURAH! THE GOAL STATE IS ACHIEVED");
  }else if((temp.value[0] === 0) || temp.value[0] >= temp.value[1]) {
    if((3 - temp.value[0] === 0) || (3 - temp.value[0] >= 3 - temp.value[1])){
      if(repetitionChecker(value)) {
        killedState.push(temp);
      } else {
        state.push(temp);
      }
    }
  }else if(temp.value[0] < temp.value[1]) {
    killedState.push(temp); 
  }
}

// Function to check whether a state already exists or not in the array
function repetitionChecker(value) {
  for(let i = 0; i < state.length; i++) {
    if(state[i].value[0] === value[0] && state[i].value[1] === value[1] && state[i].value[2] === value[2]) {
      return true;
    }
  }
  return false;
}
