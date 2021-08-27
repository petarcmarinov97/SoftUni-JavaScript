function valve(plod, day, kolichestvo) {
    let kol = Number(kolichestvo);
    if (day == "Saturday" || day == "Sunday") {
        if (plod == "banana") {
            console.log((kol * 2.7).toFixed(2));
        } else if (plod == "apple") {
            console.log((kol * 1.25).toFixed(2));
        } else if (plod == "orange") {
            console.log((kol * 0.9).toFixed(2));
        } else if (plod == "grapefruit") {
            console.log((kol * 1.6).toFixed(2));
        } else if (plod == "kiwi") {
            console.log((kol * 3).toFixed(2));
        } else if (plod == "pineapple") {
            console.log((kol * 5.6).toFixed(2));
        } else if (plod == "grapes") {
            console.log((kol * 4.2).toFixed(2));
        } else {
            console.log("error");
        }
    } else if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        if (plod == "banana") {
            console.log((kol * 2.5).toFixed(2));
        } else if (plod == "apple") {
            console.log((kol * 1.2).toFixed(2));
        } else if (plod == "orange") {
            console.log((kol * 0.85).toFixed(2));
        } else if (plod == "grapefruit") {
            console.log((kol * 1.45).toFixed(2));
        } else if (plod == "kiwi") {
            console.log((kol * 2.7).toFixed(2));
        } else if (plod == "pineapple") {
            console.log((kol * 5.5).toFixed(2));
        } else if (plod == "grapes") {
            console.log((kol * 3.85).toFixed(2));
        } else {
            console.log("error");
        }
    }else{
        console.log("error");
    }
}