let api_url  = `https://api.currencyapi.com/v3/latest?apikey=cur_live_oL6q0DOBufLzycrEfQta0M7SvIH8TCDNN3ocSfkH`;
var fact = document.querySelector(".fact");
var btn = document.querySelector("#btn");
let RUS = document.querySelector("#RUB");
let EUR = document.querySelector("#EUR");
let THB = document.querySelector("#THB");
let USD = document.querySelector("#USD");

btn.addEventListener("click", () => fetchData());

function fetchData(){
    fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_oL6q0DOBufLzycrEfQta0M7SvIH8TCDNN3ocSfkH')
    .then(res => res.json())
    .then(result => showFact(result))
    
    };

    function showFact (info){
    console.log(info)
    var amountFrom = parseFloat(document.querySelector("#amountFrom").value);
    var exchangeFrom = document.querySelector("#exchangeFrom").value;
    var exchangeTo = document.querySelector("#exchangeTo").value;

    var exchangeRates = {
        USD: 1,
        RUB: info.data.RUB.value,
        EUR: info.data.EUR.value,
        THB: info.data.THB.value

    };

    var amountTo;
    if(exchangeFrom === exchangeTo) {
        amountTo = amountFrom;
    }
    else {
        var exchangeRate = exchangeRates[exchangeTo] / exchangeRates[exchangeFrom];
        amountTo = (amountFrom * exchangeRate).toFixed(2);
    }

    document.querySelector("#amountTo").value = amountTo;
    }

    