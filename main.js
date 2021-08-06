
var api3 = "https://api.coindesk.com/v1/bpi/historical/close.json";
const list2 = document.querySelector("#list2");
const xhr2 = new XMLHttpRequest();

let getPrice = () => {
  xhr2.onreadystatechange = function () {
    if (xhr2.status == 200 && xhr2.readyState == 4){
      var data = JSON.parse(xhr2.responseText).bpi;
      var li = "";

      var res = Object.keys(data).map(val => {
        // console.log("Val: " + val +" "+ data[val]);
        li += `<li>${val}: ${data[val]}</li>`;
        list2.innerHTML = li;
      });
    }
  };
  xhr2.open("GET", api3);
  xhr2.send();
}

getPrice();





