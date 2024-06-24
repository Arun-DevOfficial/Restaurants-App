import Stripe from "stripe";

export const handleCheckoutPayment = async (req, res) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const { selectData } = req.body;
    console.log(selectData);
    if (!selectData) {
      return res.status(400).send({ error: "Product data is required" });
    }

    const lineItems = await selectData.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.image_url], // Correct property name is 'images'
        },
        unit_amount: Math.round(item.price * 100), // Stripe expects amount in cents
      },
      quantity: item.quantity,
    }));

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      // success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      // cancel_url: `${req.headers.origin}/cancel`, // Properly include cancel_url
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating Stripe checkout session:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};
