$( document ).ready(function() {
    console.log( "ready!" );
    $("#js-play").on("click",function(){
    	console.log("game button clicked");
    	$("#maindiv").html("");
    	printMarkoPolo();
    });

    $("#clear").on("click",function(){
    	console.log("clear button clicked");
    	$("#maindiv").html("");
    });

    function printMarkoPolo(){
    	var elementInOneLine = 1000,
    		finalLength = 1000000;
    	for (var i = 1; i <=  finalLength; i=i+elementInOneLine) {
    		(function (i) {
    			setTimeout(function(){
	    			var result = markoPolo(i, i+elementInOneLine-1, 4, 7)
	    			$("#maindiv").append("<span>"+result.join()+"</span><br><br>");
    			},0);
    		})(i);
    	};
    }

    function markoPolo(i, length, fizzNumber, buzzNumber){
    	var output;
    	var lineArray = [];
    	for(i; i<=length; i++){
    		output = '';
    		if(i%fizzNumber === 0){
    			output+='marko';
    		} 
    		if(i%buzzNumber === 0){
    			output+='polo';
    		} 
    		if(i%fizzNumber !== 0 && i%buzzNumber !== 0) {
    			output=i;
    		}
    		lineArray.push(output);
    	}
    	return lineArray
    }
});