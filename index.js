function myEach(collection, callback){
    let objToArr = collection;
    if(typeof(collection) === 'object'){
        objToArr = Object.values(collection);

    }
    for (let i = 0; i< objToArr.length; i++){
        callback(objToArr[i])
    }
    
    return collection
}
function myMap(collection, callback){
    let objToArr;
    if(typeof(collection) === 'object'){
        objToArr = Object.values(collection).map(callback)
        return objToArr;
    }
    else{
        objToArr = collection.map(callback)
        return objToArr
    }
}

function myReduce(collection, callback, acc) {
    let theArray = collection
    if (typeof(theArray)=== 'object'){
        theArray = Object.values(collection);
    }
    let accumulator = (acc === undefined) ? undefined : acc;
    for (var i = 0; i < theArray.length; i++) {
        if (accumulator !== undefined)
            accumulator = callback.call(undefined, accumulator, theArray[i], i, theArray);
        else
            accumulator = theArray[i];
    }
    return accumulator;
};


function myFind(collection,predicate) {
	let found;

	for (let i = 0; i < collection.length; i++) {
		let find1 = predicate(collection[i], i, collection);

		if (find1) {
			found = collection[i];
			break;
		}
	}

	return found;
};
function myFilter(collection, predicate){
    let result = []

	for (let i = 0; i < collection.length; i++) {
    let find1 = predicate(collection[i], i, collection);

		if (find1) {
			result.push(collection[i]);
		}

    }
    return result;
}
function mySize(collection){
    let total =0
    for (let i in collection){
        total++;
    }
    return total;

}
function myFirst(array, n){
    let result = [];
    if(n !== undefined){
        for (let i = 0; i <  n; i ++){
            result.push(array[i])
        }
        return result

    }
    else{
        return array[0]
    }

}
function myLast(array, n){
    let result = [];
    let length = array.length;
    let firstLast = length -n
    if(n !== undefined){
        for (let i = 0; i <  n; i ++){
            result.push(array[firstLast])
            firstLast++;
        }
        return result

    }
    else{
        return array[length-1]
    }

}
function myKeys(obj){
    // let keys = []
    // for (let i =0; i < obj.length; i++){
    //     keys.push(obj[i])
    // }

    let theArray = Object.keys(obj);
    return theArray;
}
function myValues(obj){
    let theArray = Object.values(obj);
    return theArray;
}