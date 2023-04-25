Array.prototype.uniq = function(){
    let new_arr = [] 
    this.forEach(function(ele){
        if(!new_arr.includes(ele)){
            new_arr.push(ele)
        }
    })
    return new_arr 
};


// console.log([1,2,2,3,3,3].uniq());