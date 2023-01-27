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
                if (outputCurrency === "PLN")
                    return inputAmount * 1;
                else if (outputCurrency === "EUR")
                    return inputAmount * pln_eur;
                else if (outputCurrency === "USD")
                    return inputAmount * pln_usd;
                else if (outputCurrency === "UAH")
                    return inputAmount * pln_uah;

            case "EUR":
                if (outputCurrency === "PLN")
                    return inputAmount / pln_eur;
                else if (outputCurrency === "EUR")
                    return inputAmount * 1;
                else if (outputCurrency === "USD")
                    return inputAmount * eur_usd;
                else if (outputCurrency === "UAH")
                    return inputAmount * eur_uah;

            case "USD":
                if (outputCurrency === "PLN")
                    return inputAmount / pln_usd;
                else if (outputCurrency === "EUR")
                    return inputAmount / eur_usd;
                else if (outputCurrency === "USD")
                    return inputAmount * 1;
                else if (outputCurrency === "UAH")
                    return inputAmount / uah_usd;

            case "UAH":
                if (outputCurrency === "PLN")
                    return inputAmount / pln_uah;
                else if (outputCurrency === "EUR")
                    return inputAmount / eur_uah;
                else if (outputCurrency === "USD")
                    return inputAmount / usd_uah;
                else if (outputCurrency === "UAH")
                    return inputAmount * 1;
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