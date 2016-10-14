var algebraMath = {
	quadraticFormula: function(a, b, c){
		// returns the two values of x in an array usually
		// returns one value in array if only one solution
		// returns empty array if no real solutions
		var discriminant = b * b - 4 * a * c;
		var solution = [];

		if(discriminant > 0){
			if(discriminant === 0){
				var x = -b / (2 * a);
				solution.push(x);
			}
			else{
				var sqrt = Math.sqrt(discriminant);
				var x1 = (-b + sqrt) / (2 * a);
				var x2 = (-b - sqrt) / (2 * a);
				solution.push(x1);
				solution.push(x2);
			}
		}
		return solution;
	}
};