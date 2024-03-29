/*
*
* Given an array representing prices of the stock on different days, 
* find the maximum profit that can be earned by performing maximum of 
* one transaction. A transaction consists of activity of buying and 
* selling the stock on different or same days.
*
*/

/*
*
* For example in this array - {100, 80, 120, 130, 70, 60, 100, 125} 
* the price of the stock on day-1 is 100, on day-2 is 80 and so on.
* The maximum profit that could be earned in this window is 65 
* (buy at 60 and sell at 125).
* For price array - {100, 80, 70, 65, 60, 55, 50}, maximum profit 
* that could be earned is 0.
*
*/

// Feel free to add helper functions if needed

var maximumProfit  = function(prices) {

var prices = [] ;
	var buyPrice = 0;
	var sellPrice = 0;
	var profit = 0 ;
	
    var x;
 while(x !== 0) { 
   	//O(n)
   	var temp ;
        x = 0 ;
        for (var i=0; i<prices.length-1; i++) {
        	//O(n)
            if (prices[i]> prices[i+1]) {
            temp= prices[i];
            prices[i] = prices[i+1];
            prices[i+1] = temp;
             x = 1 ;
            }
        }
	}
	
	for (var i = 0; i < prices.length; i++) {
			buyPrice = prices[0] ; 
			sellPrice = [prices.length-1] ; 

			profit = sellPrice - buyPrice ;

			buyPrice ++ ; 
			sellPrice -- ; 

	}
	return profit ;
};


// var maximumProfit  = function(prices) {
// 	var prices = [];
// 	var buyPrice = 0;
// 	var sellPrice = 0;
// 	var profit = 0 ; 
// 	// var profit = sellPrice - buyPrice ; 
// 		 for (var i = 0; i < prices.length; i++){
// 		 	if(arr[i]>arr[i+1]){
// 		 		sellPrice = arr[i+1] ; 
// 		 		buyPrice = arr[i] ;
// 		 		profit = sellPrice - buyPrice ; 
// 		 	}



// 		} 
// 		return profit ;
// };
