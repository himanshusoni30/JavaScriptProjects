// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

console.log("Contacts length: "+contacts.length);
console.log(contacts);

/*for(var i=0; i < contacts.length; i++){
    console.log(contacts[i]);
    console.log(contacts[i]["firstName"]);
}*/

function lookUpProfile(name, prop){
// Only change code below this line
    var result = "";
    for(var i = 0; i < contacts.length; i++){
        if(contacts[i]["firstName"] == name){
            if(contacts[i].hasOwnProperty(prop)){
                result = contacts[i][prop];
                break;
            }else{
                result = "No such property";
                break;
            }
        }else{            
            result = "No such contact";
        }
    }
    return result;
// Only change code above this line
}

console.log("Akira_Likes: "+lookUpProfile("Akira", "likes"));
console.log("Kristian_lastName: "+lookUpProfile("Kristian", "lastName"));
console.log("Sherlock_Likes: "+lookUpProfile("Sherlock", "likes"));
console.log("Harry_Likes: "+lookUpProfile("Harry", "likes"));
console.log("Bob_number: "+lookUpProfile("Bob", "number"));
console.log("Bob_potato: "+lookUpProfile("Bob", "potato"));
console.log("Akira_Address: "+lookUpProfile("Akira", "address"));
