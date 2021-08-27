function solve(product, grad, kolichestvo) {
    let kol = Number(kolichestvo);
    if (grad == "Sofia") {
        if (product == "coffee") {
            console.log(0.5 * kol);
        } else if (product == "water") {
            console.log(0.8 * kol);
        } else if (product == "beer") {
            console.log(1.2 * kol);
        } else if (product == "sweets") {
            console.log(1.45*kol);
        } else if (product == "peanuts") {
            console.log(1.6 * kol);
        }
    } else if (grad == "Plovdiv") {
        if (product == "coffee") {
            console.log(0.4 * kol);
        } else if (product == "water") {
            console.log(0.7 * kol);
        } else if (product == "beer") {
            console.log(1.15 * kol);
        } else if (product == "sweets") {
            console.log(1.3*kol);
        } else if (product == "peanuts") {
            console.log(1.5 * kol);
        }

    }else{
        if (product == "coffee") {
            console.log(0.45 * kol);
        }else if (product == "water") {
            console.log(0.7 * kol);
        }else if (product == "beer") {
            console.log(1.1 * kol);
        }else if (product == "sweets") {
            console.log(1.35*kol);
        }else if (product == "peanuts") {
            console.log(1.55 * kol);
        }
    }
}
