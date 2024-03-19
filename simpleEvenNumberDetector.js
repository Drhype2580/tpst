var x = parseInt(prompt("put a number"));
if (isNaN(x)) {
	    alert("Please enter a number");
} else {
	  var y = x % 2;
	  if (y == 0) {
		      console.log("yep, that's a even number");
		    } else {
			        console.log("nope, that's a odd number");
			      }
}
