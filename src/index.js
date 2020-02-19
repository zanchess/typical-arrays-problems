exports.min = function min (array) {
  if (Array.isArray(array) && array.length !== 0) {
		let arr = array.sort((a, b) => {
			return a - b;
		});
		return arr[0];
  } else{
		return 0;
	}
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length !== 0) {
		let arr = array.sort((a, b) => {
			return a - b;
		});
		return arr[arr.length-1];
  } else{
		return 0;
	}
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length !== 0) {
		var total = array.reduce(function(a, b) {
			return a + b;
	});

	return total/array.length;
  } else{
		return 0;
	}
}
