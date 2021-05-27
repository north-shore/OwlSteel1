/* Write here your custom javascript codes */

if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
}
else{ 
    ready()
}

function ready() {
 
    var removeCartItemButtons = document.getElementsByClassName('close')
    console.log( removeCartItemButtons)
    for (var i=0 ; i <  removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i]
        button.addEventListener("click", removeCartItem)
            
    }

    var quantityInputs = document.getElementsByClassName('quantity-field')
    for (var i=0 ; i <  quantityInputs.length; i++){
        var input =quantityInputs[i]
        input.addEventListener('change',quantityChanged)

    }
    var addToCartButtons = document.getElementsByClassName('add-to-cart')
    for (var i=0 ; i <  addToCartButtons.length; i++){
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)

    }
}
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement .remove()
     updateCartTotal() 

}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <=0) {
        input.value = 1  }
    updateCartTotal()
}


function addToCartClicked(suspen){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('title-price-01')[0].innerText
    var price = shopItem.getElementsByClassName('title-price')[0].innerText
    var imagesrc = shopItem.getElementsByClassName('full-width ')[0].src
    addItemToCart(title, price ,imagesrc )
    updateCartTotal()
}
function addItemToCart(title, price ,imagesrc ){

    var cartRow = document.createElement('li')
    cartRow.classList.add('cart-row')
     var cartItems = document.getElementsByClassName('list-unstyled')[0] 
     var cartItemNames = cartItems.getElementsByClassName('title-price-01')
     for (var i = 0 ; i< cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title){
            alert('This Item is already found in your card ')
            return 
        }

     }

     var cartRowContents = `
     
     <img src="${imagesrc}" alt="">
     <button type="button" class="close">×</button>
     <div class="overflow-h">
         <span class="title-price-01">${title}</span>
         <span class="cart-price">${price}</span>
         <input type='number' style="width:33px"  class="quantity-field"   value="1">
     </div>
   
     `
     cartRow.innerHTML =  cartRowContents
     cartItems.prepend(cartRow) 
     cartRow.getElementsByClassName('close')[0].addEventListener('click', 
     removeCartItem)
     cartRow.getElementsByClassName('quantity-field')[0].addEventListener('change',
     quantityChanged)

 

}

function updateCartTotal(){
    
   var cartItemContainer = document.getElementsByClassName('list-unstyled')[0]    
   var cartRows = cartItemContainer.getElementsByClassName('cart-row')
   var total = 0
   for (var i = 0 ; i < cartRows.length; i++) {
       var cartRow = cartRows[i] 
       var priceElement = cartRow.getElementsByClassName('cart-price')[0]
       var quantityElement = cartRow.getElementsByClassName('quantity-field')
       [0]
     var price = parseFloat(priceElement.innerText.replace('$',''))
     var quantity = quantityElement.value
     total = total + (price * quantity) 
       
    } 
    total = Math.round(total * 100)/100
    document.getElementsByClassName(' cart-total-price')[0].innerText = '$' + total
 
}
/*end cart calculations*/
/*start search function */
function mysearchFunction() {
    var input, upperCase, ul, li, x, i, ax;
    input = document.getElementById("mysearchInput");
    upperCase = input.value.toUpperCase();
    //console.log(upperCase);
    ul = document.getElementById("myList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      x = li[i].getElementsByTagName("a")[0];
      if (x.innerHTML.toUpperCase().indexOf(upperCase) == 0 && upperCase !== '') {
        li[i].style.visibility = "visible";
        li[i].style.display = "block";
      } else {
        li[i].style.display = "none";


                var search = document.getElementById("search");
                var formInput = document.getElementById("mysearchInput").value;
                
                var data = ["yay"];
                var data = ["today"];
                search.onclick = function(){
                
                for (i=0; i<data.length; i++){
                
                    if (data[i] === formInput) {
                    alert(data[i]);
                    }   
                    else{ alert("no items found");   }
                }
                };
      }
    }
  }
  /*end search function */
   /*google api */
   




 /* end google api*/



/*local storage*/
 

/* end local storage*/