document.addEventListener("DOMContentLoaded", function() {

    slowMath.add(6, 2)
    .then((sum) => {
        console.log(`Sum of 6 and 2 is ${sum}`);
        return slowMath.multiply(sum, 2)
    })  .then((product) => {
        console.log(`multiply that by 2 to get ${product}`);
        return slowMath.divide(product, 4)
    })  .then((quotient) => {
        console.log(`divide that by 4 to get ${quotient}`);
        return slowMath.subtract(quotient, 3)
    }) .then((goober) => {
    console.log(`subtract 3 from that to get ${goober}`);
    return slowMath.add(goober, 98)
    }) .then((sum) => {
        console.log(`add 98 to that sucker to get ${sum}`);
        return slowMath.remainder(sum, 2)
    }) .then((remaining) => {
        console.log(`divide that sh*t by 2 and you'll have a remainder of ${remaining}`);
    return slowMath.multiply(remaining, 50)
    }) .then((product) => {
        console.log(`multiply this by 50 and you'll have ${product}`);
        return slowMath.remainder(product, 40)
    }) .then((remainder) => {
        console.log(`dividing that by 40 ends up leaving a remainder of ${remainder}`); 
        return slowMath.add(remainder, 32)   
    }) .then((sum) => {
        console.log(`delete systems 32 and add it to the 10 to get the final result, which is ${sum}, the answer to all things`)
    })
    .catch((err) => {
        console.log('u mess up a a ron');
        console.log(err);
    })
    
    
        async function doMath() {
    
        try {
            const sum = await slowMath.add(6, 2);
            console.log(`Sum of 6 and 2 is ${sum}`);
            const product = await slowMath.multiply(sum, 2);
            console.log(`multiply that by 2 to get ${product}`);
            const quotient = await slowMath.divide(product, 4);
            console.log(`divide that by 4 to get ${quotient}`);
            const goober = await slowMath.subtract(quotient, 3);
            console.log(`subtract 3 from that to get ${goober}`);
            const sum_1 = await slowMath.add(goober, 98);
            console.log(`add 98 to that sucker to get ${sum_1}`);
            const remaining = await slowMath.remainder(sum_1, 2);
            console.log(`divide that sh*t by 2 and you'll have a remainder of ${remaining}`);
            const product_1 = await slowMath.multiply(remaining, 50);
            console.log(`multiply this by 50 and you'll have ${product_1}`);
            const remainder = await slowMath.remainder(product_1, 40);
            console.log(`dividing that by 40 ends up leaving a remainder of ${remainder}`);
            const sum_2 = await slowMath.add(remainder, 32);
            console.log(`delete systems 32 and add it to the 10 to get the final result, which is ${sum_2}, the answer to all things`);
        }
        catch (err) {
            console.log('u mess up a a ron');
            console.log(err);
        }
    }
    
    
    
    })