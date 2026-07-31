import React from 'react'
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

const RAZORPAY_SRC = "https://checkout.razorpay.com/v1/checkout.js"

// Razorpay's checkout script probes its own CDN the moment it loads, which logs a
// failed request on every page view. Loading it only when a payment starts avoids that.
const loadRazorPay = () =>
  new Promise((resolve, reject) => {
    if (window.Razorpay) return resolve(window.Razorpay)

    let script = document.querySelector(`script[src="${RAZORPAY_SRC}"]`)
    if (!script) {
      script = document.createElement("script")
      script.src = RAZORPAY_SRC
      script.async = true
      document.body.appendChild(script)
    }
    script.addEventListener("load", () => resolve(window.Razorpay))
    script.addEventListener("error", () => reject(new Error("checkout script blocked")))
  })

const PaymentModel = ({setIsOpen, isOpen, price}) => {
 function close() {
    setIsOpen(false)
  }

  const launchRazorPay = async () => {
    let RazorPay
    try {
        RazorPay = await loadRazorPay()
    } catch (error) {
        alert("Payment could not start right now. Please check your connection and retry.")
        return
    }

    const options = {
        key: "rzp_test_IfG1nrH1Ru9F59",
        amount: price*100,
        currency: "INR",
        name: "Nkr's Book My Show Clone",
        description: "Movie purchase or rental",
        image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler: () => {
            setIsOpen(false);
            alert("Payment successful")
        },
        theme: {color: "#c4242d"}
    };

    new RazorPay(options).open()
  }

  

  return <>
     <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-red/5 p-6 bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="font-medium text-black text-base/7">
               Please make a payment
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-black/50">
                Hello please click on the below button to make a payment
              </p>
              <div className="mt-4">
                <Button
                  className=" mr-5 inline-flex items-center gap-2 rounded-md bg-red-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-red-700"
                  onClick={launchRazorPay}
                >
                  Pay ${price}
                </Button>

                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-red-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-red-700"
                  onClick={close}
                >
                 Cancel Payment
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
  </>
}

export default PaymentModel