let goButton = document.querySelector('#goButton');
let missionaryCount;
let cannibalCount;
let tracker = [3, 3, 1];
let parent;
goButton.addEventListener("click", function() {

    missionaryCount = document.querySelector('#missionaries').value === ""?0:parseInt(document.querySelector('#missionaries').value);
    document.querySelector('#missionaries').value = '';
    cannibalCount = document.querySelector('#cannibals').value === ""?0:parseInt(document.querySelector('#cannibals').value);
    document.querySelector('#cannibals').value = '';
    if(missionaryCount === 0 && cannibalCount === 0) {
        alert("Cannot move!");
    }else {
        applyMove(missionaryCount,cannibalCount );
    }

})

function draw() {
  
    fill(255, 255, 255);
    stroke(255);
    line(20, 20, 200, 200);

}
function applyMove(M, C) {
    parent = tracker;
    // Boat is at right or left bank
    if(tracker[2] === 1) {
        // Total person in a boat
        if(M + C <= 2) {
            // User Input cannot be greater than available Missionaries and Cannibals.
            if(M > tracker[0]  || C > tracker[1]) {
                console.log("Invalid Move");
            }else {
                tracker[0] = tracker[0] - M;
                tracker[1] = tracker[1] - C;
                if(tracker[2] === 1?tracker[2]=0:tracker[2]=1);
                if(tracker[0] === 0 && tracker[1] === 0 && tracker[2] === 0) {                  

                }else if(checkfromState()) {
                    console.log("Acceptable State");
                }else {
                    console.log("Game Over");
                }
            }
        }else {
            console.log("cannot accomodate more than two person in a boat")
        }

    }else {
        if(M > (3 - tracker[0]) || C > (3 - tracker[1])) {
            console.log("This means invalid input");
        }else {
            tracker[0] = tracker[0] + M;
            tracker[1] = tracker[1] + C;
            (tracker[2] === 1?tracker[2]=0:tracker[2]=1); 
            if(tracker[0] === 0 && tracker[1] === 0 && tracker[2] === 0) {
                console.log("YOU WON");
            }else if(checkfromState()) {
                console.log("Acceptable State");
            }else {
                console.log("game Over");
            }
        }
    }
}
function checkfromState() {
    for(let i = 0; i < state.length; i++) {
        if(state[i].value[0] === tracker[0] && state[i].value[1] === tracker[1] && state[i].value[2] === tracker[2]) {
            return true;
        }
    }
    return false;
}
function setup() {
    createCanvas(600, 600);
    background(0);
}

function draw() {

}