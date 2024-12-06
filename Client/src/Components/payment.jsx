import PayPalButton from "./PayPalButton";

const BookingPage = () => {
  const totalPrice = 200; // Example price

  return (
    <div>
      <h1>Confirm Your Booking</h1>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <PayPalButton totalPrice={totalPrice} />
    </div>
  );
};

export default BookingPage;
