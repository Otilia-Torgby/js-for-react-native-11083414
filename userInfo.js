// userInfo.js
// Task 3

function createUserProfiles(names, modifiedNames) {
    const userProfiles = [];
  
    for (let i = 0; i < names.length; i++) {
      const originalName = names[i];
      const modifiedName = modifiedNames[i];
      const id = i + 1; // Auto-incremented ID starting from 1
      userProfiles.push({ originalName, modifiedName, id });
  }

  return userProfiles;
}

// Usage:
const namesArray = ["OTILIA", "TORGBY", "PATIENCE"];
const modifiedNamesArray = ["'otilia", "TORGBY", "patience"];
const profiles = createUserProfiles(namesArray, modifiedNamesArray);
console.log(profiles);