$(".owl-carousel").owlCarousel({
  merge:true,
  loop:true,
  video:true,
  image:true
});
function calculateUsage() {
        
  var watts = document.getElementById('watts').value;
  var hours = document.getElementById('hours').value;
  var days = document.getElementById('days').value;
  
  
  var totalEnergy = (watts * hours * days) / 1000; // Converting to kWh
  
  
  document.getElementById('result').innerHTML = "Total Electricity Usage: " + totalEnergy + " kWh";}
  function ordered(){
    var txt;
    if (confirm("Press Ok to Confirm the Email")){
      alert("Newsletter SignUp Successfull")
      txt ="Order Confirmed";
    }
    else{
      alert("Newsletter SignUp Failed")
      txt="Order Cancelled";
    }
    document.getElementById("btn btn-outline-light btn-lg button-download").innerHTML = txt;
  }
  
