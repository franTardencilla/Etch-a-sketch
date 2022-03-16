
const mainContainer = document.querySelector(".main-container")
const resetButton = document.querySelector("button")
resetButton.addEventListener("click", function(){
    

    if(mainContainer.childElementCount > 0){
        resetGrid()
    } else{
        const userSelection = prompt("Enter the number of squares for each side","")
        validateUserSelection(userSelection) ? createGrid(userSelection) : alert("Enter a valid number")
    }
    
})


function validateUserSelection(userSelection){
    return userSelection <= 100
}

function resetGrid(){
    var lastChild = mainContainer.lastElementChild
    console.log(mainContainer.childElementCount)
    while(mainContainer.childElementCount > 0){
        mainContainer.removeChild(lastChild)
        lastChild = mainContainer.lastElementChild
    }

   
}

function createGrid(side = 16){

    for(let i = 1; i <= side; i++){
        const verticalContainer = document.createElement("div")
        verticalContainer.classList.add("vertical-container")

        for(let i = 1; i <= side; i++){
            const innerSquare = document.createElement("div")
            innerSquare.classList.add("inner-square")
            verticalContainer.appendChild(innerSquare)
            setUpHoverListener(innerSquare)
        }

        mainContainer.appendChild(verticalContainer)
    }
    
}


function setUpHoverListener(div){
    div.addEventListener("mouseover",(event) => {
        event.target.style.backgroundColor = "white";
    })
}

