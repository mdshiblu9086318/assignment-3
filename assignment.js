

/*problems --- 1 */

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}

/*problems --- 2 */

function budgetCalculator(watch,phone,laptop){
    watchPrice = watch * 50 ;
    phonePrice = phone *100 ;
    laptopPrice = laptop * 500 ;
    totalBudget = watchPrice + phonePrice + laptopPrice ;
    return totalBudget;
}

/*problems --- 3 */

function hotelCost(days){
    var totalDays = 0;
if(days <= 10){
    totalDays = days * 100;
}else if(days <= 20){
    var firstTenDays = 10 * 100;
    var remainingDays = days - 10;
    var nextTenDays = remainingDays * 80;
    totalDays = firstTenDays + nextTenDays;
}else{
    var firstTenDays = 10 * 100;
    var nextTenDays = 10 * 80; 
    var remainingDays = depth - 20;
    var nextFewDays = remainingDays * 50;
    totalDays = firstTenDays + nextTenDays + nextFewDays;
}
return totalDays;
}

/*problems --- 4 */

function megaFriend(count){
    var friend = " ";
    for(var i = 0; i < count.length; i++){
      var currentItem = count [i];
      if(currentItem.length>friend.length){
        friend = count[i];
      }
    }
    return friend;
}
