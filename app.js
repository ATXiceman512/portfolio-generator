const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);


// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = profileDataArr => {

    // This is.............
    for(let i = 0; i < profileDataArr.length; i++){
        console.log(profileDataArr[i]);
    };

    console.log("=========");

    // The same as this.............
    profileDataArr.forEach((profileItem) => {
        console.log(profileItem);
    });

    // Cleaner version of forEach
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);