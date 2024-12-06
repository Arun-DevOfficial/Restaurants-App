import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ totalPrice }) => {
  const [paymentStatus, setPaymentStatus] = useState("");

  const handleApprove = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/paypal/execute-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentId: data.paymentID,
          payerId: data.payerID,
        }),
      });
      const result = await response.json();
      setPaymentStatus(result.message);
    } catch (error) {
      setPaymentStatus("Payment failed");
      console.error(error);
    }
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "YOUR_CLIENT_I", currency: "USD" }}>
      <div>
        <PayPalButtons
          createOrder={async () => {
            const response = await fetch("http://localhost:5000/api/paypal/create-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ totalPrice }),
            });
            const data = await response.json();
            return data.approvalUrl;
          }}
          onApprove={handleApprove}
          onError={(err) => console.error("Error:", err)}
        />
        {paymentStatus && <p>{paymentStatus}</p>}
      </div>
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
