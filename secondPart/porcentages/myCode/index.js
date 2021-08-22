/**
 * The function calculates the price of any product with discounts and coupons.
 * @param {float} price 
 * @param {float} discount 
 * @param {float} coupon 
 * @returns The price with discounts and coupons (if has it)
 */
function calculate(price, discount, coupon) {
        const pricePorcentageWithDiscount = 100 - discount - coupon;
        return (price * pricePorcentageWithDiscount) / 100;
}
/**
 * The function integrates the JS functions with HTML page.
 */
function enter() {
        const price = document.getElementById("inputPrice");
        const priceValue = price.value;
        const discount = document.getElementById("inputDiscount");
        const discountValue = discount.value;
        const coupons = document.getElementById("inputCoupon");
        const couponsValue = cupons.value;
        const finalPrice = calculate(priceValue, discountValue, couponsValue);
        const displayResult = document.getElementById("displayPrice");
        displayResult.innerText = `You have to play: $${finalPrice}`;
}
