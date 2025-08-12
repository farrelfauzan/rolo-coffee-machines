"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { customerSchema } from "@/schema/customer-schema";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import z, { set } from "zod";
import { Input } from "../ui/input";
import { useFormStore } from "@/lib/store/form";
import { useEffect, useCallback, useMemo } from "react";
import Footer from "./footer";
import { useCartStore } from "@/lib/store/cart";
import { createCustomer } from "@/server/customer";
import { useRouter } from "next/navigation";

const CustomerForm = () => {

  const { setSubmitForm, setFormValid, setIsLoading } = useFormStore();
  const { total, items, clearCart } = useCartStore();

  const form = useForm({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      unit: "",
      code: "",
    },
    mode: "onChange",
  });

  const name = form.watch("name");
  const email = form.watch("email");
  const address = form.watch("address");
  const code = form.watch("code");

  const isFormValid = useMemo(() => {
    const hasRequiredFields =
      name?.trim() !== "" &&
      email?.trim() !== "" &&
      address?.trim() !== "" &&
      code?.trim() !== "";

    const hasNoErrors = Object.keys(form.formState.errors).length === 0;
    return hasRequiredFields && hasNoErrors;
  }, [name, email, address, code, form.formState.errors]);

  useEffect(() => {
    setFormValid(isFormValid);
  }, [isFormValid, setFormValid]);

const onSubmit = useCallback(async (values: z.infer<typeof customerSchema>) => {
  setIsLoading(true);

  try {
    // Optionally: save customer data first
    await createCustomer({
      ...values,
      items,
      total,
    });

    // Then create Stripe checkout session
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }), // just cart items for now
    });

    const { url } = await res.json();

    if (url) {
      // Redirect to Stripe Checkout UI (PayNow included)
      window.location.href = url;
    } else {
      console.error('No checkout URL returned from server');
    }
  } catch (error) {
    console.error('Error during checkout:', error);
  } finally {
    setIsLoading(false);
    form.reset();
    clearCart();
  }
}, [items, total, form, setIsLoading]);


  const onError = useCallback((errors: any) => {
    console.log("Form validation errors:", errors);
  }, []);

  useEffect(() => {
    const submitHandler = () => {
      console.log("About to trigger form submission...");
      form.handleSubmit(onSubmit, onError)();
    };
    setSubmitForm(submitHandler);
  }, [form.handleSubmit, setSubmitForm, onSubmit, onError]);

  return (
    <Form {...form}>
      <div className="flex flex-col w-3/4">
        <h1 className="text-2xl font-medium mb-6 text-start">Your Details</h1>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4 bg-white space-y-6"
        >
          {/* Section 1: Personal Info */}
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="shadow-none border-[#BABFCE]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="shadow-none border-[#BABFCE]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Divider */}
          <div className="col-span-2">
            <hr className="border-[#BABFCE]" />
          </div>

          {/* Section 2: Address */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input {...field} className="shadow-none border-[#BABFCE]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Section 3: Unit & Postcode */}
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="unit"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-row justify-between">
                    <FormLabel>Unit / House Number</FormLabel>
                    <FormDescription>Optional</FormDescription>
                  </div>
                  <FormControl>
                    <Input
                      {...field}
                      className="shadow-none border-[#BABFCE]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem className="mt-1">
                  <FormLabel>Code</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="shadow-none border-[#BABFCE]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </div>
      <Footer totalPrice={total} />
    </Form>
  );
};

export default CustomerForm;
