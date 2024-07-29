const form = document.getElementById('form-conversao');
const valorInput = document.getElementById('valor');
const moedaOrigemSelect = document.getElementById('moeda-origem');
const moedaDestinoSelect = document.getElementById('moeda-destino');
const btnConverter = document.getElementById('btn-converter');
const resultadoP = document.getElementById('resultado');

const taxasDeCambio = {
    BRL: {
        USD: 0.25,
        EUR: 0.22,
        GBP: 0.19,
        JPY: 2.55
    },
    USD: {
        BRL: 4.05,
        EUR: 0.88,
        GBP: 0.76,
        JPY: 109.38
    },
    EUR: {
        BRL: 4.55,
        USD: 1.14,
        GBP: 0.86,
        JPY: 124.31
    },
    GBP: {
        BRL: 5.25,
        USD: 1.32,
        EUR: 1.16,
        JPY: 143.29
    },
    JPY: {
        BRL: 0.039,
        USD: 0.0091,
        EUR: 0.0081,
        GBP: 0.0069
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const valor = parseFloat(valorInput.value);
    const moedaOrigem = moedaOrigemSelect.value;
    const moedaDestino = moedaDestinoSelect.value;

    if (moedaOrigem === moedaDestino) {
        resultadoP.textContent = `Não é possível converter ${moedaOrigem} para ${moedaDestino}`;
        return;
    }

    const taxaDeCambio = taxasDeCambio[moedaOrigem][moedaDestino];
    const resultado = valor * taxaDeCambio;

    resultadoP.textContent = `${valor} ${moedaOrigem} é igual a ${resultado.toFixed(2)} ${moedaDestino}`;
});