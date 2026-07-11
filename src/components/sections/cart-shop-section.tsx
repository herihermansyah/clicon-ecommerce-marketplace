"use client";
import React from "react";
import WrapperMain from "../wrapper-main";
import {useCartStore} from "@/store/use-cart-store";
import Image from "next/image";
import Button from "../ui/button";
import {IoArrowBackOutline} from "react-icons/io5";

const CartShopSection = () => {
  // Asumsi store kamu punya fungsi untuk update qty dan remove item
  const {cartItems} = useCartStore();

  return (
    <section className="py-10 bg-gray-50 min-h-screen">
      <WrapperMain>
        <div className="bg-white rounded-sm border border-gray-200 shadow-sm overflow-hidden">
          {/* Header Card */}
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-xl font-semibold text-gray-800">
              Shopping Cart
            </h1>
          </div>

          {/* Table Container */}
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-200 text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 uppercase text-xs font-semibold text-gray-500 tracking-wider border-b border-gray-200">
                  <th className="py-3 px-6 w-[50%]">Products</th>
                  <th className="py-3 px-6 w-[15%]">Price</th>
                  <th className="py-3 px-6 w-[20%]">Quantity</th>
                  <th className="py-3 px-6 w-[15%]">Sub-Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cartItems.map((item) => {
                  const currentPrice = item.product.price;
                  const subTotal = currentPrice * item.quantity;
                  const isDiscounted = (
                    currentPrice *
                    (1 - item.product.discountPercentage / 100)
                  ).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  });

                  return (
                    <tr key={item.product.id} className="align-middle">
                      {/* Products Column */}
                      <td className="py-6 px-6">
                        <div className="flex items-center gap-6">
                          {/* Remove Button */}
                          <button
                            // onClick={() => removeFromCart?.(item.product.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </button>

                          {/* Image */}
                          <div className="relative w-16 h-16 shrink-0 bg-gray-50 border border-gray-100 rounded p-1">
                            <Image
                              src={item.product.thumbnail || "/"}
                              alt={item.product.title || "product"}
                              fill
                              className="object-contain"
                            />
                          </div>

                          {/* Product Name */}
                          <span className="text-sm font-medium text-gray-700 max-w-sm line-clamp-2">
                            {item.product.title}
                          </span>
                        </div>
                      </td>

                      {/* Price Column */}
                      <td className="py-6 px-6">
                        <div className="flex items-center gap-2 text-sm font-medium">
                          {isDiscounted && (
                            <span className="text-gray-400 line-through">
                              ${isDiscounted}
                            </span>
                          )}
                          <span className="text-gray-800">${currentPrice}</span>
                        </div>
                      </td>

                      {/* Quantity Column */}
                      <td className="py-6 px-6">
                        <div className="flex items-center border border-gray-200 rounded-sm w-32 justify-between bg-white px-2 py-1">
                          <button
                            // onClick={() =>
                            //   updateQuantity?.(
                            //     item.product.id,
                            //     Math.max(1, item.quantity - 1),
                            //   )
                            // }
                            className="text-gray-500 hover:text-gray-700 px-2 text-lg font-light select-none"
                          >
                            &mdash;
                          </button>
                          <span className="text-sm font-medium text-gray-700 w-8 text-center">
                            {String(item.quantity).padStart(2, "0")}
                          </span>
                          <button
                            // onClick={() =>
                            //   updateQuantity?.(
                            //     item.product.id,
                            //     item.quantity + 1,
                            //   )
                            // }
                            className="text-gray-500 hover:text-gray-700 px-2 text-lg font-light select-none"
                          >
                            &#43;
                          </button>
                        </div>
                      </td>

                      {/* Sub-Total Column */}
                      <td className="py-6 px-6">
                        <span className="text-sm font-semibold text-gray-800">
                          ${subTotal}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-gray-200 flex justify-between items-center bg-white">
            <Button
              iconLeft={<IoArrowBackOutline />}
              variant={"outline"}
              color={"secondary"}
            >
              Return to Shop
            </Button>
            <Button variant={"outline"} color="secondary">
              Update Cart
            </Button>
          </div>
        </div>
      </WrapperMain>
    </section>
  );
};

export default CartShopSection;
