let listArea = document.querySelector('#listArea')
let listInput = document.querySelector('#listInput')
let listButton = document.querySelector('#listButton')


//initial to do list
let toDoList = [
    {
        task: "Clean car",
        completed: false
    },
    {
        task: "Wash dishes",
        completed: false
    },
    {
        task: "Do homework",
        completed: false
    },
    {
        task: "Eat rocks",
        completed: false
    }
]

//creates a new list item
function createNewListItem(){
    if (listInput.value.length > 0){
        const currentBoxValue = listInput.value
        
              //pushes list item to toDoList
              toDoList.push(
                {
                    task: currentBoxValue,
                    completed:false
                }
            )
      
        //const that calls the last element to the toDoList
        //for some reason it only actually calls the newest item if I put it after the push
        const lastElement = toDoList[toDoList.length - 1]   

        //makes list item show up on site
        let createListItem = document.createElement('li')
        createListItem.textContent = lastElement.task
        listArea.appendChild(createListItem)

        //checks to make sure list item is pushed... keeping it in for now
        console.log(toDoList)


        //clears box
        listInput.value = ''
    }
}

//edits to do list item

//deletes to do list item


//event listeners for box and button
listButton.addEventListener("click", (log) => {
   createNewListItem()
 })
listInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
    createNewListItem()
    }})


// forEach loop that generates list
toDoList.forEach((listItem) => {
    let createListItem = document.createElement('li')
    createListItem.textContent = listItem.task
    listArea.appendChild(createListItem)
 
   });

