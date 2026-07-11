import {ProductTypes} from "@/@types/product-types";
import {create} from "zustand";
import {persist} from "zustand/middleware";

interface CartItem {
  product: ProductTypes;
  quantity: number;
}

interface UseCartStoreType {
  cartItems: CartItem[];
  addToCart: (params: {newProduct: ProductTypes}) => void;
}

export const useCartStore = create<UseCartStoreType>()(
  persist(
    (set) => ({
      cartItems: [],
      addToCart({newProduct}) {
        set((state) => {
          // check if the product is already in the cart
          const isExist = state.cartItems.find(
            (item) => item.product.id === newProduct.id,
          );

          if (isExist) {
            return {
              // if the product is already in the cart, increase the quantity
              cartItems: state.cartItems.map((item) =>
                item.product.id === newProduct.id
                  ? {...item, quantity: item.quantity + 1}
                  : item,
              ),
            };
          }

          // if the product is not in the cart, add it
          return {
            cartItems: [
              ...state.cartItems,
              {
                product: newProduct,
                quantity: 1,
              },
            ],
          };
        });
      },
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({
        cartItems: state.cartItems,
      }),
    },
  ),
);
