function calculatePriceWithDiscount(price, discount) {
        const pricePorcentageWithDiscount = 100 - discount;
        return (price * pricePorcentageWithDiscount) / 100;

}

function onClickButtonPriceDiscount(){
        const inputPrice = document.getElementById("inputPrice");
        const priceValue = inputPrice.value;

        const inputDiscount = document.getElementById("inputDiscount");
        const discountValue = inputDiscount.value;

        const finalPrice = calculatePriceWithDiscountandCupon(priceValue, discountValue);
        const displayResult = document.getElementById("displayResult");
        displayResult.innerText = `You have to play: $${finalPrice}`;
}
