let password = "asdVSSD";
let specialChar = "~!@#$%^&";
let hasStr = false;
let hasSpecial = false;
let hasNumber = false;

for (let i = 0; i < password.length; i++) {
    const index = password[i];
    if ((index >= "a" && index <= "z") || (index >= "A" && index <= "Z")) {
        hasStr = true;
    } else if (index >= "0" && index <= "9") {
        hasNumber = true;
    } else {
        for (let j = 0; j < specialChar.length; j++) {
            const indexJ = specialChar[j];
            if (index === indexJ) {
                hasSpecial = true;
            }
        }

        //*includes
        //if (specialChar.includes(index)) hasSpecial = true;
    }
}

if (hasSpecial && hasNumber && hasStr) {
    console.log("password high");
} else if (hasStr && hasNumber) {
    console.log("password medium");
} else {
    console.log("password low");
}
