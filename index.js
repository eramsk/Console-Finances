const finances = [
  { month : 'Jan-2010', amount : 867884 },
  { month : 'Feb-2010', amount : 984655 },
  { month : 'Mar-2010', amount : 322013 },
  { month : 'Apr-2010', amount : -69417 },
  { month : 'May-2010', amount : 310503 },
  { month : 'Jun-2010', amount : 522857 },
  { month : 'Jul-2010', amount : 1033096 },
  { month : 'Aug-2010', amount : 604885 },
  { month : 'Sep-2010', amount : -216386 },
  { month : 'Oct-2010', amount : 477532 },
  { month : 'Nov-2010', amount : 893810 },
  { month : 'Dec-2010', amount : -80353 },
  { month : 'Jan-2011', amount : 779806 },
  { month : 'Feb-2011', amount : -335203},
  { month : 'Mar-2011', amount : 697845 },
  { month : 'Apr-2011', amount : 793163 },
  { month : 'May-2011', amount : 485070 },
  { month : 'Jun-2011', amount : 584122 },
  { month : 'Jul-2011', amount : 62729 },
  { month : 'Aug-2011', amount : 668179 },
  { month : 'Sep-2011', amount : 899906 },
  { month : 'Oct-2011', amount : 834719 },
  { month : 'Nov-2011', amount : 132003 },
  { month : 'Dec-2011', amount : 309978 },
  { month : 'Jan-2012', amount : -755566 },
  { month : 'Feb-2012', amount : 1170593 },
  { month : 'Mar-2012', amount : 252788 },
  { month : 'Apr-2012', amount : 1151518 } ,
  { month : 'May-2012', amount : 817256 },
  { month : 'Jun-2012', amount : 570757 },
  { month : 'Jul-2012', amount : 506702 },
  { month : 'Aug-2012', amount : -1022534 },
  { month : 'Sep-2012', amount : 475062 },
  { month : 'Oct-2012', amount : 779976 },
  { month : 'Nov-2012', amount : 144175 },
  { month : 'Dec-2012', amount : 542494 },
  { month : 'Jan-2013', amount : 359333 },
  { month : 'Feb-2013', amount : 321469 },
  { month : 'Mar-2013', amount : 67780 },
  { month : 'Apr-2013', amount : 471435 },
  { month :'May-2013', amount : 565603 },
  { month : 'Jun-2013', amount : 872480 },
  { month : 'Jul-2013', amount : 789480 },
  { month : 'Aug-2013', amount : 999942 },
  { month : 'Sep-2013', amount : -1196225 },
  { month : 'Oct-2013', amount : 268997 },
  { month : 'Nov-2013', amount : -687986 },
  { month : 'Dec-2013', amount : 1150461 },
  { month : 'Jan-2014', amount : 682458 },
  { month : 'Feb-2014', amount : 617856 },
  { month : 'Mar-2014', amount : 824098 },
  { month : 'Apr-2014', amount : 581943 },
  { month : 'May-2014', amount : 132864 },
  { month : 'Jun-2014', amount : 448062 },
  { month : 'Jul-2014', amount : 689161 },
  { month : 'Aug-2014', amount : 800701 },
  { month : 'Sep-2014', amount : 1166643 },
  { month : 'Oct-2014', amount : 947333 },
  { month : 'Nov-2014', amount : 578668 },
  { month : 'Dec-2014', amount : 988505 },
  { month : 'Jan-2015', amount : 1139715 },
  { month : 'Feb-2015', amount : 1029471 },
  { month : 'Mar-2015', amount : 687533 },
  { month : 'Apr-2015', amount : -524626 },
  { month : 'May-2015', amount : 158620 },
  { month : 'Jun-2015', amount : 87795 },
  { month : 'Jul-2015', amount : 423389 },
  { month : 'Aug-2015', amount : 840723 },
  { month : 'Sep-2015', amount : 568529 },
  { month : 'Oct-2015', amount : 332067 },
  { month : 'Nov-2015', amount : 989499 },
  { month : 'Dec-2015', amount : 778237 },
  { month : 'Jan-2016', amount : 650000 },
  { month : 'Feb-2016', amount : -1100387 },
  { month : 'Mar-2016', amount : -174946 },
  { month : 'Apr-2016', amount : 757143 },
  { month : 'May-2016', amount : 445709 },
  { month : 'Jun-2016', amount : 712961 },
  { month : 'Jul-2016', amount : -1163797 },
  { month : 'Aug-2016', amount : 569899 },
  { month : 'Sep-2016', amount : 768450 },
  { month : 'Oct-2016', amount : 102685 },
  { month : 'Nov-2016', amount : 795914 },
  { month : 'Dec-2016', amount : 60988 },
  { month : 'Jan-2017', amount : 138230 },
  { month : 'Feb-2017', amount : 671099 }
];

console.log("Financial Analysis"); 
console.log("------------------");
const totalMonths = finances.length;
console.log("Total Months: " + finances.length); 


// Initialize variables for profits and losses
var totalProfit = 0;
var totalLoss = 0;

// Calculate total profits and losses
finances.forEach(entry => {
  if (entry.amount > 0) {
    totalProfit += entry.amount;
  } else {
    totalLoss += Math.abs(entry.amount); 
  }
});

// Calculate the net total
var netTotal = totalProfit - totalLoss;

//console.log('Total Profit:', totalProfit);
//console.log('Total Loss:', totalLoss);
console.log('Total: $', netTotal);

// Initialize variables
var totalChange = 0;

// Calculate monthly changes
for (var i = 1; i < finances.length; i++) {
  var change = finances[i].amount - finances[i - 1].amount;
  totalChange += change;
}

// Calculate average change
var averageChange = totalChange / (finances.length - 1);

//console.log('Total Change:', totalChange);
//console.log('Average Change:', averageChange);

var number = averageChange;

// Round to the nearest hundredth
var roundedNumber = number.toFixed(2);
console.log("Average Change : " + roundedNumber);


// Initialize variables
var maxIncrease = 0;
var maxIncreaseMonth = '';
var minDecrease = 0;
var minDecreaseMonth = '';

// Calculate monthly changes and find the greatest increase and greatest decrease
for (var i = 1; i < finances.length; i++) {
  var change = finances[i].amount - finances[i - 1].amount;

  if (change > maxIncrease) {
    maxIncrease = change;
    maxIncreaseMonth = finances[i].month;
  } else if  (change < minDecrease) {
    minDecrease = change;
    minDecreaseMonth = finances[i].month;
  }
}

console.log('Greatest Increase in Profits/Losses:', maxIncreaseMonth , "($",maxIncrease , ")" );
console.log('Greatest Decrease in Profits/Losses: ', minDecreaseMonth  , "($" , minDecrease , ")" );
