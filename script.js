const orderButton = document.querySelector(".order-button");
const feedback = document.querySelector("#order-feedback");

if (orderButton && feedback) {
  orderButton.addEventListener("click", () => {
    feedback.textContent = "Pedido iniciado! Fale com a Brasa Burger pelo WhatsApp ou app de entrega.";
  });
}
