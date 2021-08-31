function matrix(n) {

       let num=n.toString()
       let times=Number(n)
        for(let i=0;i<num;i++){
        console.log((num+` `).repeat(times))
    }
}
matrix(7)