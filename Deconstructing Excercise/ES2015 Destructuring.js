let obj = {
    numbers: {
        a : 1,
        b : 2,
    }
};

let {numbers: {a, b}} = obj;

let raceResults = (first, second, third, ...rest) => ({
    return :{
        first,
        second,
        third,
        rest
    }
})

let arr = [1, 2];
let temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

[arr[0], arr[1]] = [arr[1], arr[0]]