/**
 * util that allow compare objects 
 * @param {*} oneObj 
 * @param {*} twObj 
 */
const CompareEqualObj = function (oneObj, twObj) {
	for (var p in oneObj) {
		if (oneObj.hasOwnProperty(p) !== twObj.hasOwnProperty(p)) return false;
 
		switch (typeof (oneObj[p])) {
			case 'object':
				if (!CompareEqualObj(oneObj[p], twObj[p])) return false;
				break;
			case 'function':
                if (typeof (twObj[p]) == 'undefined' || (p !== 'CompareEqualObj' && 
                    oneObj[p].toString() !== twObj[p].toString())) return false;
				break;
			default:
				if (oneObj[p] !== twObj[p]) return false;
		}
	}
 
	for (var itemObj in twObj) {
		if (typeof (oneObj[itemObj]) == 'undefined') return false;
	}

	return true;
};

export default CompareEqualObj;