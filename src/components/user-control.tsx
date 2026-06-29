import React from "react";
import {LuShoppingCart} from "react-icons/lu";
import {GrFavorite} from "react-icons/gr";
import {PiUserBold} from "react-icons/pi";

const UserControlCompunded = () => {
  return (
    <div className="flex items-center gap-6">
      <CartControl />
      <FavoriteControl />
      <UserControl />
    </div>
  );
};

const CartControl = () => {
  return (
    <button className="text-gray-00">
      <LuShoppingCart size={25} />
    </button>
  );
};

const FavoriteControl = () => {
  return (
    <button className="text-gray-00">
      <GrFavorite size={25} />
    </button>
  );
};

const UserControl = () => {
  return (
    <button className="text-gray-00">
      <PiUserBold size={25} />
    </button>
  );
};

export {UserControl, UserControlCompunded, CartControl, FavoriteControl};
