const payButton = document.querySelector('.basket__pay')

const paymentForm = document.querySelector('.basket__payment__form')

payButton.addEventListener('click', () => {
    paymentForm.style.display = 'block'
})

const closePaymentButton = document.querySelector('.payment__close')

closePaymentButton.addEventListener('click', () => {
    paymentForm.style.display = 'none'
})