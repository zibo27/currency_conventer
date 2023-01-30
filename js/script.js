{
    const calculateResult = (inputAmount, inputCurrency, outputCurrency) => {
        const pln_eur = 0.2143714628708626;
        const pln_usd = 0.2275468177577537;
        const eur_usd = 1.061460395476369;
        const pln_uah = 7.94912559618442;
        const eur_uah = 37.08108108108108;
        const usd_uah = 34.93402225755167;
        const uah_usd = 0.02862604105038;

        switch (inputCurrency) {
            case "PLN":
                switch (outputCurrency) {
                    case "PLN":
                        return inputAmount * 1;
                    case "EUR":
                        return inputAmount * pln_eur;
                    case "USD":
                        return inputAmount * pln_usd;
                    case "UAH":
                        return inputAmount * pln_uah
                }
            case "EUR":
                switch (outputCurrency) {
                    case "PLN":
                        return inputAmount / pln_eur;
                    case "EUR":
                        return inputAmount * 1;
                    case "USD":
                        return inputAmount * eur_usd;
                    case "UAH":
                        return inputAmount * eur_uah;
                }
            case "USD":
                switch (outputCurrency) {
                    case "PLN":
                        return inputAmount / pln_usd;
                    case "EUR":
                        return inputAmount / eur_usd;
                    case "USD":
                        return inputAmount * 1;
                    case "UAH":
                        return inputAmount / uah_usd;
                }
            case "UAH":
                switch (outputCurrency) {
                    case "PLN":
                        return inputAmount / pln_uah;
                    case "EUR":
                        return inputAmount / eur_uah;
                    case "USD":
                        return inputAmount / usd_uah;
                    case "UAH":
                        return inputAmount * 1;
                }
            default:
        }
    };

    const updateResultText = (result, outputCurrency) => {
        const totalElement = document.querySelector(".js-total");

        totalElement.innerHTML = `${result.toFixed(2)} ${outputCurrency}`;
    };

    const onFormChange = () => {
        const inputAmountElement = document.querySelector(".js-inputAmount");
        const inputCurrencyElement = document.querySelector(".js-inputCurrency");
        const outputCurrencyElement = document.querySelector(".js-outputCurrency");
        const outputCurrency = outputCurrencyElement.value;
        const inputAmount = +inputAmountElement.value;
        const inputCurrency = inputCurrencyElement.value;
        const result = calculateResult(inputAmount, inputCurrency, outputCurrency);
        updateResultText(result, outputCurrency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("input", onFormChange);
    };

    init();
}