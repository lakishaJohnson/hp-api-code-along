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
    
    
    
});




//STEP 4 <------------------ADD SELECTED CHARACTER'S NAME TO TEAM MEMBERS LIST ON BUTTON CLICK------------------------>
