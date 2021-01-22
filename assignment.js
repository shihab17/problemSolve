function kilometerToMeter(value) {
    if (value < 0) {
        return "Distance cannot be negative";
    }
    else {
        return value * 1000;
    }
}

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0) {
        return "Number of watch cannot less then zero ";
    }
    else {
        var watchCost = watch * 50;
    }

    if (phone < 0) {
        return "Number of mobile cannot less then zero ";
    }
    else {
        var phoneCost = phone * 100;
    }

    if (laptop < 0) {
        return "Number of laptop cannot less then zero ";
    }
    else {
        var laptopCost = laptop * 500;
    }
    var totalCost = watchCost + phoneCost + laptopCost;
    return totalCost;
}

function hotelCost(numberOfDays) {
    if (numberOfDays < 0) {
        return "Days can not be negative number ";
    }
    else if (numberOfDays <= 10) {
        return numberOfDays * 100;
    }
    else if (numberOfDays <= 20) {
        var tenDaysCost = 10 * 100;
        var afterTen = numberOfDays - 10;
        var cost = afterTen * 80;
        var totalCost = cost + tenDaysCost;
        return totalCost;
    }
    else {
        var tenDaysCost = 10 * 100;
        var tenToTwentyCost = 10 * 80;
        var afterTwenty = numberOfDays - 20;
        var cost = afterTwenty * 50;
        var totalCost = cost + tenDaysCost + tenToTwentyCost;
        return totalCost;
    }
}

function megaFriend(str) {
    var megaFriend = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > megaFriend.length) {
            megaFriend = arr[i];
        }
    }
    return megaFriend;
}
