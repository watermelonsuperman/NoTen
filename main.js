
function createMultiplyTable(start,end) {
    return generateTable(start,end);
}

function generateTable(start,end){
    let result = "";
    for(let index = start;index <= end;index++){
        result += start ===index ? "":"\n";
        result += getLine(start,index);
    }
    return result;
}
function getLine(start,end){
    let result = "";
    for(let index = start;index <= end;index++){

        result += getException(index,end);
        result += index === end ? "":" "
    }
    return result;
}
function getException(first,second){
    return  `${first}*${second}=${first*second}`;
    
}


module.exports = createMultiplyTable;

