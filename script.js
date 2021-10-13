//STEP 1 <-------------------------------------------FETCH DATA------------------------------------------------------->
fetch("http://hp-api.herokuapp.com/api/characters/house/gryffindor")
//json data
.then((response) => {
    //parses data into js object
    return response.json();
})
//js object can be named anything
.then((characters) => {
    console.log(characters);
    
    //STEP 2 <------------------------USE DATA TO ADD CHARACTER NAMES TO THE DROPDOWN MENU------------------------------->
    //Selects dropDown from HTML
    let dropDown = document.querySelector("#dropDown");
    //for loop to add each characters name to dropdown menu from data/js object 
    for(let character of characters) {
        //using DOM to create new tag <option> for each character
        const option = document.createElement("option")
        //adding a value to each option which is character name
        option.setAttribute("value", character.name)
        //adding content to be displayed which is character name
        option.textContent = character.name
        //we end up w/an option for each character name
        //appends option to dropDown menu
        dropDown.append(option);
    }
    //STEP 3 <--------------------------------DISPLAY SELECTED CHARACTER'S INFO------------------------------------------->
    //now we have access to all of the elements that we need to manipulate.
    let currentName = document.querySelector("#name")
    const dob = document.querySelector("#dob")
    const patronus = document.querySelector("#patronus")
    const headshot = document.querySelector("#headshot")

    //variable to hold dropDown selection from data, which will change, that's why it's an empty string
    let selectedCharacter

    //make an eventListener for when dropDown changes, data is updated
    dropDown.addEventListener("change", () => {
        //what happens after change is made...
        //loop thru js object
        for (let character of characters) {
            if(dropDown.value === character.name) {
                selectedCharacter = character
                
                //console log just to see if code works properly
                console.log(character)
                
                //grabbing selectedCharacter and adds   
                currentName.textContent = character.name;
                dob.textContent = character.dateOfBirth;
                patronus.textContent = character.patronus;
                //for adding an image
                headshot.src = character.image;
            }
        }
    })
    //STEP 4 <------------------ADD SELECTED CHARACTER'S NAME TO TEAM MEMBERS LIST ON BUTTON CLICK------------------------>
    const membersUL = document.querySelector("#members")
    let addBut = document.querySelector("#addButton") 

    addBut.addEventListener("click", () => {
        //what happens after button is clicked...
        //creates a new tag
        let newMember = document.createElement("li")
        //adds content to new tag
        newMember.textContent = selectedCharacter.name
        //appends li to ul
        membersUL.append(newMember)
    })
});
