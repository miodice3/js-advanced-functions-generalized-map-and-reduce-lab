// Add your functions here
function map(ray, doThis){
    return ray.map(function(e){
        return doThis(e)
    })
}

// function map(ray, doThis){
//     return ray.map(e => doThis(e) )
// }

// function map(ray, cb){
//     return ray.map(e => cb(e))
// }

function reduce(ray, cb, startingPoint){
    return ray.reduce(cb, startingPoint)
}


// function reduce(ray, startingPoint){
//     return ray.reduce(function cb(){

//     }, startingPoint=0)
//     }
// }