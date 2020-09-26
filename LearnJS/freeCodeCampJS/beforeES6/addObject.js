// Setup
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(object, id, prop, value) {
  if(value === ""){
    delete object[id][prop];
  }else if(prop === "tracks"){
    if(!object[id].hasOwnProperty(prop)){
      object[id][prop]=[value];
    }else if(object[id].hasOwnProperty(prop) && value !== ""){
      object[id][prop].push(value);
    }
  }else{
    object[id][prop]=value;
  }
  return object;
}

console.log(updateRecords(collection, 5439, 'artist', 'ABBA'));

console.log(updateRecords(collection, 5439, "tracks", "Take a Chance on Me"));

console.log(updateRecords(collection, 2548, "artist", ""));

console.log(updateRecords(collection, 1245, "tracks", "Addicted to Love"));

console.log(updateRecords(collection, 2468, "tracks", "Free"));

console.log(updateRecords(collection, 2548, "tracks", ""));

console.log(updateRecords(collection, 1245, "albumTitle", "Riptide"));

console.log(collection[5439]);