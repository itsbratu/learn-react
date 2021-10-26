const result = {
    "succes" : ["max-length" , "no-amd" , "prefer-arrow-funct"],
    "failure" : ["no-var" , "var-on-top" , "linebrek"],
    "skipped" : ["id-blacklist" , "no-dup-keys" , "signal-succes"]
};

function makeList(arr , prop){
    const resultedArray = [];

    for(let i = 0 ; i < 3 ; ++i){
        resultedArray[i] = `<li class="text-warning" ${arr[prop][i]} </li> \n`;
    }
    return resultedArray;
}

for (let i = 0 ; i < makeList(result , "skipped").length ; ++i){
    console.log(makeList(result , "skipped")[i] , "\n");
}