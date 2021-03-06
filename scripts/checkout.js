function increaseTimeValue() {
  var value = parseInt(document.getElementById("number-1").value, 10);
  var timeRentalCost = document.getElementById("time-rental-cost");
  var distanceRentalCost = document.getElementById("distance-rental-cost");
  var totalRentalCost = document.getElementById("total-rent");

  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number-1").value = value;
  timeRentalCost.innerHTML = value * 5;

  var t = parseInt(timeRentalCost.innerHTML);
  var d = parseInt(distanceRentalCost.innerHTML);
  if (t > d) {
    totalRentalCost.innerHTML = 100 + t;
    distanceRentalCost.style.textDecoration = "line-through";
    timeRentalCost.style.textDecoration = "";
  }
}

function decreaseTimeValue() {
  var value = parseInt(document.getElementById("number-1").value, 10);
  var timeRentalCost = document.getElementById("time-rental-cost");
  var distanceRentalCost = document.getElementById("distance-rental-cost");
  var totalRentalCost = document.getElementById("total-rent");
  if (value <= 4) {
    return;
  }
  value = isNaN(value) ? 0 : value;
  value--;
  document.getElementById("number-1").value = value;
  timeRentalCost.innerHTML = value * 5;

  var t = parseInt(timeRentalCost.innerHTML);
  var d = parseInt(distanceRentalCost.innerHTML);
  if (t < d) {
    totalRentalCost.innerHTML = 100 + d;
    timeRentalCost.style.textDecoration = "line-through";
    distanceRentalCost.style.textDecoration = "";
  }
}

function increaseDistanceValue() {
  var value = parseInt(document.getElementById("number-2").value, 10);
  var distanceRentalCost = document.getElementById("distance-rental-cost");
  var timeRentalCost = document.getElementById("time-rental-cost");
  var totalRentalCost = document.getElementById("total-rent");

  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number-2").value = value;
  distanceRentalCost.innerHTML = value * 3;

  var t = parseInt(timeRentalCost.innerHTML);
  var d = parseInt(distanceRentalCost.innerHTML);
  if (t < d) {
    totalRentalCost.innerHTML = 100 + d;
    timeRentalCost.style.textDecoration = "line-through";
    distanceRentalCost.style.textDecoration = "";
  }
}

function decreaseDistanceValue() {
  var value = parseInt(document.getElementById("number-2").value, 10);
  var distanceRentalCost = document.getElementById("distance-rental-cost");
  var timeRentalCost = document.getElementById("time-rental-cost");
  var totalRentalCost = document.getElementById("total-rent");

  if (value <= 1) {
    return;
  }
  value = isNaN(value) ? 0 : value;
  value--;
  document.getElementById("number-2").value = value;
  distanceRentalCost.innerHTML = value * 3;

  var t = parseInt(timeRentalCost.innerHTML);
  var d = parseInt(distanceRentalCost.innerHTML);
  if (t > d) {
    totalRentalCost.innerHTML = 100 + t;
    distanceRentalCost.style.textDecoration = "line-through";
    timeRentalCost.style.textDecoration = "";
  }
}
