let initialState = [3, 3, 1];
let goalState = [2, 2, 0];
let state = [];
let killedState = [];
class CreateState {
  constructor() {
    this.value;
    this.parent;
  }
}
// Creating a root node.
var  rootNode = new CreateState();
rootNode.value = initialState;
rootNode.parent = initialState;

function setup() {
  createCanvas(600, 600);
  background(0);
  state.push(rootNode);
  for(let i = 0; i < state.length; i++) {
  }
  applyOperation(state[0]);
  // applyOperation(state[3]);

}

function applyOperation(tempState) {
    boatPosition = tempState.value[2];
    // If Boat is at the left bank
    if(boatPosition === 1) {   
      console.log("boat is going from Left to Right"); 
      if(tempState.value[0] >= 1) {
        addState(tempState, [tempState.value[0] - 1, tempState.value[1] - 0, 0]);
      }
      if(tempState.value[1] >= 1) {
        addState(tempState, [tempState.value[0] - 0, tempState.value[1] - 1, 0]);
      }
      if(tempState.value[0] >= 1 && tempState.value[1] >= 1) {
        addState(tempState, [tempState.value[0] - 1, tempState.value[1] - 1, 0]);
      }
      if(tempState.value[0] >= 2) {
        addState(tempState, [tempState.value[0] - 2, tempState.value[1] - 0, 0]);
      }
      if(tempState.value[1] >= 2) {
        addState(tempState, [tempState.value[0] - 0, tempState.value[1] - 2, 0]);
      }
    } else if(boatPosition === 0) {
      // If Boat is at the right bank.
      console.log("boat is going from Right to Left") 
      if(tempState.parent[0] - tempState.value[0] >= 1) {
        addState(tempState, [tempState.value[0] + 1, tempState.value[1] + 0, 1]);
      }
      if(tempState.parent[1] - tempState.value[1] >= 1) {
        addState(tempState, [tempState.value[0] + 0, tempState.value[1] + 1, 1]);
      }
      if((tempState.parent[0] - tempState.value[0] >= 1) && (tempState.parent[1] + tempState.value[1] >= 1)) {
        addState(tempState, [tempState.value[0] + 1, tempState.value[1] + 1, 1]);
      }
      if(tempState.parent[0] - tempState.value[0] >= 2) {
        addState(tempState, [tempState.value[0] + 2, tempState.value[1] + 0, 1]);
      }
      if(tempState.parent[1] - tempState.value[1] >= 2) {
        addState(tempState, [tempState.value[0] + 0, tempState.value[1] + 2, 1]);
      }
    }
    console.log(state);

}

function addState(parent, value) {
  var temp = new CreateState();
  temp.value = value;
  temp.parent = parent.value;
  console.log( temp.value);
  console.log( goalState);
  if(goalState[0] === temp.value[0] && goalState[1] === temp.value[1]) {
    console.log("win");
  }
  if(temp.value[0] >= temp.value[1]) {
    state.push(temp);
  }else if(temp.value[0] < temp.value[1]) {
    killedState.push(temp); 
  }
}