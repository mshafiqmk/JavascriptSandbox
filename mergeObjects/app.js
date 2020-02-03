var o1 = { f1: 15.01, f2 : [1,2,3], f3 : "example", f4: ["s1", "s2", "s3"], c1 : "fsdf"}
var o2 = { f1: 15.01, f2: [4, 5, 6], f3: "example", f4: ["s4", "s5", "s6"], c2: "1212", c3:12}
function mergeObjects(o1,o2) {
    var result = {...o1,...o2};
    var keys1 = Object.keys(o1);
    var keys2 = Object.keys(o2);
    keys1.forEach(key => {
        if(o1.hasOwnProperty(key) && o2.hasOwnProperty(key)){
            console.log(key,'exsist on both')
            if (typeof o1[key] == 'number' )  {
                console.log("number")
                result[key] = o1[key]+o2[key];
            }
            if (typeof o1[key] == 'object') {
                console.log('object')
                result[key] = [...o1[key],...o2[key]];
            }
            if (typeof o1[key] == 'string') {
                result[key] = o1[key];
            }
        }
    });
    console.log(`Resulted object =>`, result);
}
mergeObjects(o1,o2);
