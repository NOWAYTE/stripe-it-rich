import { useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'




function CheckoutPage( {amount} : { amount: number }) {
  const stripe = useStripe
  const elements = useElements
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("")
  const [loading, setLoading] = useState(false)
}

export default CheckoutPage