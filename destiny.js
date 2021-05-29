function cal_num(){
   let name = document.getElementById("txtNam").value;
  console.log(name);
    let count=0;
  for(var i = 0; i < name.length; i++)
  {
     var  namChr = name.charAt(i)
    console.log(name.charAt(i));
    if(namChr == "A" || namChr == "I" || namChr == "J" || namChr == "Q" || namChr == "Y")
    {
      count++;
      console.log(""+count);
    } else if (namChr == "B" || namChr == "K" || namChr == "R") {
      count=count+2;
      console.log(""+count);
    }
    else if (namChr == "C" || namChr == "G" || namChr == "L" || namChr == "S" ) {
      count=count+3;
      console.log(""+count);
    }
    else if (namChr == "D" || namChr == "M" || namChr == "T" ) {
      count=count+4;
      console.log(""+count);
    }
    else if (namChr == "E" || namChr == "H" || namChr == "N" || namChr == "X") {
      count=count+5;
      console.log(""+count);
    }
    else if (namChr == "U" || namChr == "V" || namChr == "W") {
      count=count+6;
      console.log(""+count);
    }
    else if (namChr == "O" || namChr == "Z") {
      count=count+7;
      console.log(""+count);
    }
    else if (namChr == "F" || namChr == "P") {
      count=count+8;
      console.log(""+count);
    }
  }
  console.log(count);
  let DestinyNum = count.toString().split("");
  let DestinyNumArr =  DestinyNum.map((i) => Number(i));
  console.log(DestinyNumArr);
  let DestinyNumRes = DestinyNumArr.reduce((total, value) => total + value,0);
  console.log(DestinyNumRes);
  document.getElementById("result").innerHTML = "Your destiny number is "+count;
}
