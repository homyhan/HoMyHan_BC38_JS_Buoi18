function btnAdd() {
  var number = document.getElementById("number").value;
  var visibleArr = document.getElementById("visibleArr");
  var rs = "";
  if (number == "" || number == null) {
    rs+="";
  } else {
    if (!Number.isInteger(number * 1)) {
      alert("Vui long nhap so nguyen");
    } else {
      rs += number * 1 + ", ";
    }
  }

  visibleArr.innerHTML += rs;

  return visibleArr.innerHTML;
}

function saveArray() {
  var data = btnAdd();

  var arr = [];
  arr = data.split(", ");
  arr.pop();
  return arr;
}

function ex1() {
  var arr = saveArray();
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] * 1 > 0) {
      sum += arr[i] * 1;
    }
  }
  document.getElementById("result1").innerHTML =
    "Tong cac so nguyen duong bang: " + sum;
}

function ex2() {
  var arr = saveArray();
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] * 1 > 0) {
      count++;
    }
  }
  document.getElementById("result2").innerHTML =
    "So luong so nguyen duong: " + count;
}

function ex3() {
  var arr = saveArray();
  var min = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] * 1 < min) {
      min = arr[i] * 1;
    }
  }
  document.getElementById("result3").innerHTML = "So nho nhat la: " + min;
}

function ex4() {
  var arr = saveArray();
  var min = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] * 1 > 0) {
      min = arr[i] * 1;
      for (var j = 0; j < arr.length; j++) {
        if (arr[j] > 0 && min > arr[j] * 1) {
          min = arr[j] * 1;
        }
      }
    }
  }
  document.getElementById("result4").innerHTML = "So duong nho nhat: " + min;
}

function ex5() {
  var arr = saveArray();
  var number = 0;
  var rs = "";
  for (var i = arr.length - 1; i > 0; i--) {
    if ((arr[i] * 1) % 2 === 0) {
      number = arr[i] * 1;
      rs = "So chan cuoi cung trong mang la: " + number;
      break;
    } else {
      number = -1;
      rs = number + "";
    }
  }
  document.getElementById("result5").innerHTML = rs;
}

function ex6() {
  var arr = saveArray();
  var local1 = document.getElementById("local1").value * 1;
  var local2 = document.getElementById("local2").value * 1;

  var temp = arr[local1];
  arr[local1] = arr[local2];
  arr[local2] = temp;

  document.getElementById("result6").innerHTML = arr;
}

function ex7() {
  var arr = saveArray();
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] * 1 > arr[j] * 1) {
        var temp = arr[i] * 1;
        arr[i] = arr[j] * 1;
        arr[j] = temp * 1;
      }
    }
  }
  document.getElementById("result7").innerHTML = arr;
}

function checkPrime(number) {
  var check = true;

  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      check = false;
      break;
    }
  }
  return check;
}
function ex8() {
  var arr = saveArray();
  var rs = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      var check = checkPrime(arr[i]);
      if (check) {
        rs = arr[i];
        break;
      } else {
        rs = -1;
      }
    }
  }

  document.getElementById("result8").innerHTML = rs;
}

function ex10() {
  var arr = saveArray();
  var count = 0;
  var rs = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] * 1 > 0) {
      count++;
    }
  }
  var countNegative = arr.length - count;

  if (count > countNegative) {
    rs = "So luong so duong nhieu hon so am";
  } else if (countNegative == count) {
    rs = "So luong so duong bang so luong so am";
  } else {
    rs = "So luong so am nhieu hon so luong so duong";
  }

  document.getElementById("result10").innerHTML = rs;
}

function btnAddEx9() {
  var number = document.getElementById("numberEx9").value;
  var visibleArr = document.getElementById("visibleArrEx9");
  var rs = "";
  if (number == "" || number == null) {
    rs += "";
  } else {
    rs += number * 1 + ", ";
  }

  visibleArr.innerHTML += rs;

  return visibleArr.innerHTML;
}

function saveArrayEx9() {
  var data = btnAddEx9();

  var arr = [];
  arr = data.split(", ");
  arr.pop();
  return arr;
}

function ex9() {
  var arr = saveArrayEx9();
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i] * 1)) {
      count++;
    }
  }
  document.getElementById("result9").innerHTML = count;
}
