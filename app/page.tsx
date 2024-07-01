"use client"
import Image from "next/image";
import CheckoutPage from "@/components/CheckoutPage";
import convertCurrency from '@/lib/convertCurrency'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePublicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;

if (!stripePublicKey) {
  throw new Error("Stripe public key is not defined. Please set NEXT_PUBLIC_STRIPE_PUBLIC_KEY in your environment variables.");
}

const stripePromise = loadStripe(stripePublicKey);

export default function Home() {

  const amount  = 9.99
  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-yellow-50 to-gray-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2 text-[#071952]">Nowayte</h1>
        <h2 className="text-2xl">charge
          <span className="font-bold ">${amount}</span>
        </h2>

      </div>

      <Elements
      stripe={stripePromise}
      options={{
        mode:"payment",
        amount: convertCurrency(amount),
        currency: "usd"
      }}
      >
        <CheckoutPage amount={amount} />

      </Elements>
    </main>
  );
}
