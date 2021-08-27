function outfit(gradusi, denonoshtie) {
    let grad = Number(gradusi);
    if (10 <= grad && grad <= 18) {
        if (denonoshtie == "Morning") {
            console.log(`It's ${grad} degrees, get your Sweatshirt and Sneakers.`);
        } else if (denonoshtie == "Afternoon") {
            console.log(`It's ${grad} degrees, get your Shirt and Moccasins.`);
        } else if (denonoshtie == "Evening") {
            console.log(`It's ${grad} degrees, get your Shirt and Moccasins.`);
        }
    }else if(18<grad && grad<=24){
        if (denonoshtie == "Morning") {
            console.log(`It's ${grad} degrees, get your Shirt and Moccasins.`);
        } else if (denonoshtie == "Afternoon") {
            console.log(`It's ${grad} degrees, get your T-Shirt and Sandals.`);
        } else if (denonoshtie == "Evening") {
           console.log(`It's ${grad} degrees, get your Shirt and Moccasins.`);
        }
    }else if(grad>=25){
        if (denonoshtie == "Morning") {
            console.log(`It's ${grad} degrees, get your T-Shirt and Sandals.`);
        } else if (denonoshtie == "Afternoon") {
            console.log(`It's ${grad} degrees, get your Swim Suit and Barefoot.`);
        } else if (denonoshtie == "Evening") {
            console.log(`It's ${grad} degrees, get your Shirt and Moccasins.`);
        }  
    }
}