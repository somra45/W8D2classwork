const times_2 = function(ele){
    return ele * 2
};

Array.prototype.myEach = function(callback){
    // let new_arr = []
    for(let i = 0; i < this.length; i++){
       callback(this[i])
    }
    // return new_arr 
};

Array.prototype.myMap = function(callback){
    let new_arr = []
    for(let i = 0; i < this.length; i++){
       new_arr.push(callback(this[i]))
    } 
    return new_arr
};
console.log([1,2,3].myEach(times_2))
console.log([1,2,4].myMap(times_2))