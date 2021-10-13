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
    
    //STEP 3 <--------------------------------DISPLAY SELECTED CHARACTER'S INFO------------------------------------------->
    
    
    
});




//STEP 4 <------------------ADD SELECTED CHARACTER'S NAME TO TEAM MEMBERS LIST ON BUTTON CLICK------------------------>
