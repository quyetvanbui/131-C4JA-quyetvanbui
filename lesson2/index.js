let str = "";
function numberOneTriangle(N){
  var N = parseInt(N);
  //tạo độ cao của tam giác
  for(let i = 0 ;i<N;i++){
    for(let j=0;j<=i;j++){
      document.write("*");
    }
    document.write("<br />")
  }
}

numberOneTriangle(2);
