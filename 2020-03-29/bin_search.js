const guess = parseInt(process.argv[2]);
const possible_values = [...Array(102).keys()];

bin_search = (ary, guess) => {
    // console.log('called with ' + JSON.stringify(ary))
    const middle = Math.floor(ary.length/2)

    // console.log(JSON.stringify({ middle, ary_middle: ary[middle], guess }))
    if (ary[middle] === guess) return 1;

    const new_ary = 
        ary[middle] < guess ? ary.slice(middle, ary.length) : 
        ary[middle] > guess ? ary.slice(0, middle) : 0
    
    if (new_ary === 0) throw new Error("Could not find number");

    return 1 + bin_search(new_ary, guess)
}

console.log('Total runs: ' + (bin_search(possible_values, guess)+1));
