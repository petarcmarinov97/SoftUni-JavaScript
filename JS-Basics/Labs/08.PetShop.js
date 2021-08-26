function pet(br1, br2) {
    let broikucheta = Number(br1);
    let ostanalijivotni = Number(br2);
    let krainasuma = Number(broikucheta) * 2.50 + Number(ostanalijivotni) * 4;
    console.log(`${krainasuma} lv.`);
}

pet('5','3')