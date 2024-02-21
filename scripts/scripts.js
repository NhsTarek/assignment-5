document.addEventListener("DOMContentLoaded", function() {
    // Select the button element
    var scrollButton = document.getElementById('scrollButton');
  
    // Select the section to scroll to
    var targetSection = document.getElementById('targetSection');
  
    // Add click event listener to the button
    scrollButton.addEventListener('click', function() {
      // Scroll the section into view
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const allBtns = document.querySelectorAll('.all-btn');

// Loop through each 'all-btn' element
allBtns.forEach(function(btn) {
  // Add a click event listener to each button
  btn.addEventListener('click', function() {
    // When the button is clicked, change its background color
    this.style.backgroundColor = '#1DD100';
    
  });
});


// const seatsLeft = document.getElementById('seats-left').innerText;
// const convertedSeatsLeft = parseInt(seatsLeft);

const seatsLeft = getConvertedValue("seats-left");
const seatsCount = getConvertedValue("seats-count");

function getConvertedValue(id){
   const value = document.getElementById(id).innerText;
   const ConvertedValue = parseInt(value);
   return ConvertedValue;
}

const allBtn = document.getElementsByClassName("all-btn");
for(const btn of allBtn){
  btn.addEventListener("click", function (event){


  const seat = event.target.parentNode.childNodes[1].innerText;
  const seatClass = 'Economy';
  const price = 550;


    
 const selectedSeatsContainer = document.getElementById("selected-container");





const firstSeatNumber = getConvertedValue("seats-count");
if(firstSeatNumber+1 >4){
  alert("you can't buy more tickets");
  return;
}






//  Updating seats number
  const seatsCount = getConvertedValue("seats-count");
  document.getElementById("seats-count").innerText = seatsCount + 1;
  
    



  const seatsLeft = getConvertedValue("seats-left");
  document.getElementById("seats-left").innerText = seatsLeft - 1;


 const div = document.createElement("div");
 div.classList.add("flex", "justify-evenly")

 const p1 = document.createElement("p")
 const p2 = document.createElement("p")
 const p3 = document.createElement("p")

 p1.innerText = seat;
 p2.innerText = seatClass;
 p3.innerText = price;

div.appendChild(p1)
div.appendChild(p2)
div.appendChild(p3)

selectedSeatsContainer.appendChild(div);


updatedTotalCost(price);
grandTotal()


    
  });

  
}


function updateGrandTotal(status){
  const totalCost = getConvertedValue("total-price");
  if (status === undefined){
    const totalCost = getConvertedValue("total-price");
    document.getElementById("grand-total").innerText = totalCost;
  
  }

  else{
    const couponCode = document.getElementById("coupon-code").value;
      if( couponCode === "NEW15"){
        const discount = totalCost * (15/100);
        document.getElementById("grand-total").innerText = totalCost - discount;
        document.getElementById("hide").classList.add("hidden");
      }
      else if(couponCode === "Couple 20"){
        const discount = totalCost * .2;
        document.getElementById("grand-total").innerText = totalCost - discount;
        document.getElementById("hide").classList.add("hidden");
      }

      else{
        alert ('enter a valid coupon');
      }
        
      
      
  }
}

function updatedTotalCost(value){
  console.log(value);
   const totalCost = getConvertedValue("total-price");
   const sum = totalCost + parseInt(value);
   document.getElementById("total-price").innerText = sum;
   
}

function grandTotal(){
  const totalCost = getConvertedValue("total-price");
  document.getElementById("grand-total").innerText = totalCost;
}



