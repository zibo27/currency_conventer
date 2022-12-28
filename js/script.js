console.log("Witam Was serdecznie nazywam się Sebastian Pawłowski :) !");

let formElement = document.querySelector(".js-form");
let inputAmountElement = document.querySelector(".js-inputAmount");
let inputCurrencyElement = document.querySelector(".js-inputCurrency");
let outputCurrencyElement = document.querySelector(".js-outputCurrency");
let totalElement = document.querySelector(".js-total");

let pln_eur = 0.2143714628708626;
let pln_usd = 0.2275468177577537;
let eur_usd = 1.061460395476369;
let pln_uah = 7.94912559618442;
let eur_uah = 37.08108108108108;
let usd_uah = 34.93402225755167;

formElement.addEventListener("input", () => {

    let inputAmount = +inputAmountElement.value;
    let inputCurrency = inputCurrencyElement.value;
    let outputCurrency = outputCurrencyElement.value;

    switch
    (inputCurrency) {
        case "PLN":
            if (outputCurrency === "PLN")
                result = (inputAmount * 1);
            else if (outputCurrency === "EUR")
                result = (inputAmount * pln_eur);
            else if (outputCurrency === "USD")
                result = (inputAmount * pln_usd);
            else if (outputCurrency === "UAH")
                result = (inputAmount * pln_uah);
            break;

        case "EUR":
            if (outputCurrency === "PLN")
                result = (inputAmount / pln_eur);
            else if (outputCurrency === "EUR")
                result = (inputAmount * 1);
            else if (outputCurrency === "USD")
                result = (inputAmount * eur_usd);
            else if (outputCurrency === "UAH")
                result = (inputAmount * eur_uah);
            break;

        case "USD":
            if (outputCurrency === "PLN")
                result = (inputAmount / pln_usd);
            else if (outputCurrency === "EUR")
                result = (inputAmount / eur_usd);
            else if (outputCurrency === "USD")
                result = (inputAmount * 1);
            else if (outputCurrency === "UAH")
                result = (inputAmount / usd_uah);
            break;

        case "UAH":
            if (outputCurrency === "PLN")
                result = (inputAmount / pln_uah);
            else if (outputCurrency === "EUR")
                result = (inputAmount / eur_uah);
            else if (outputCurrency === "USD")
                result = (inputAmount / usd_uah);
            else if (outputCurrency === "UAH")
                result = (inputAmount * 1);
            break;
      default:
    }

    totalElement.innerText = `${result.toFixed(2)} ${outputCurrency}`;
})