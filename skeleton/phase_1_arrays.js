Array.prototype.uniq = function(){
    let new_arr = [] 
    this.forEach(function(ele){
        if(!new_arr.includes(ele)){
            new_arr.push(ele)
        }
    })
    return new_arr 
};

Array.prototype.two_sum = function(){
    let new_arr = []
    const arr = this
    arr.forEach(function(ele1, i){
        arr.forEach(function(ele2, j){
            if (ele1 + ele2 === 0 && j > i) {
                new_arr.push([i, j])
            }
        })
    })
    return new_arr
};

Array.prototype.transpose = function(){
    let height = this.length
    let width = this[0].length
    const arr = this
    let matrix = new Array(height) 
        for (let i = 0; i < width; i++) {
            matrix[i] = new Array
        };
    
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            matrix[i][j] = arr[j][i]
        };
    };
    return matrix   
};

const matrix = [
    [1, 2],
    [4, 5],
    [7, 8]
  ];

console.log(matrix.transpose());

