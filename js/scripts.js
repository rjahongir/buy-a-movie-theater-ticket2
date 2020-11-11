var USD_IN_UZS = 10374;
var betmenMovieTicketingPrice = 20.1;
var elShreddingForm = document.querySelector('.money-shredding');
var elInsertedInput = elShreddingForm.querySelector('.money-inserted');
var elAnsverResult = elShreddingForm.querySelector('.result-cash');
var elResultFailure = elShreddingForm.querySelector('.result-failure');
var elResultView = document.querySelector('.result-view');
var elUnsatisfactoryResult = document.querySelector('.unsatisfactory-result');
var elUnsatisfactoryResultTop = document.querySelector('.unsatisfactory-result-top');
var elResultForm = document.querySelector('.result-form');

var elInsufficientPrice = elShreddingForm.querySelector('.insufficient-price');

     
elShreddingForm.addEventListener('submit', function(evt){
         evt.preventDefault();
         enteredValue = parseFloat(elInsertedInput.value, 10);
         var currencyExchange = enteredValue / USD_IN_UZS ;
         elResultForm.classList.remove('d-none');

         if ( currencyExchange >= betmenMovieTicketingPrice){
           elResultView.classList.remove('d-none');
           elResultForm.classList.add('alert-success');
           elAnsverResult.textContent = currencyExchange;
           
         } else {
           var notEnoughMoney = betmenMovieTicketingPrice - currencyExchange;
           elUnsatisfactoryResult.classList.remove('d-none');
           elUnsatisfactoryResultTop.classList.remove('d-none');
           elResultForm.classList.add('alert-danger');
           elResultFailure.textContent = currencyExchange;
           elInsufficientPrice.textContent = notEnoughMoney ;
         }
});
  