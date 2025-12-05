
function countSheeps(list) {
    const sheepCount = list.filter(Boolean).length;
    if (sheepCount === 0) {
        console.log("UPS!!! Wolfs ate Sheeps");
    } else {
        console.log("There are ${sheepCount} sheep in total");
    }
}

countSheeps([
    true, true, true, false, true, true, true, true, true, false,
    true, false, true, false, false, true, true, true, true, true,
    false, false, true, true
]);

countSheeps([false, false, false]);
