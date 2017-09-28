var bottles;
for (i = 5; i >= 1; i--)
{
    if (i == 1) {
        bottles = "bottle";
    } else {
        bottles = "bottles";
    }

    console.log(i +" "+bottles+" of beer on the wall.");

    if (i < 5) {
        console.log("");
        console.log(i+" "+bottles+" of beer on the wall.");
    }


    console.log(i+" "+bottles+" of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");

    if (i == 1) {
        console.log("No more bottles of beer on the wall.");
    }
}
