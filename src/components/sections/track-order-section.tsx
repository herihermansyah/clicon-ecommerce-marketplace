"use client";
import React from "react";
import WrapperMain from "../wrapper-main";
import Typography from "../ui/typography";
import {Field, FieldGroup, FieldLabel, Input} from "../ui/input";
import Button from "../ui/button";
import {IoMdArrowForward} from "react-icons/io";
import {motion} from "motion/react";

const TrackOrderSection = () => {
  return (
    <motion.section
      initial={{opacity: 0, scale: 0}}
      animate={{opacity: 1, scale: 1}}
      className="py-12 pb-31"
    >
      <WrapperMain className="flex flex-col items-start gap-10">
        <div className="flex flex-col gap-4 sm:w-150">
          <Typography variant={"h1"} weight={600}>
            Track Order
          </Typography>
          <Typography variant={"m"} weight={300} className="text-gray-600">
            To track your order please enter your order ID in the input field
            below and press the “Track Order” button. this was given to you on
            your receipt and in the confirmation email you should have received.
          </Typography>
        </div>
        <FieldGroup className="flex-row flex-wrap gap-10">
          <Field>
            <FieldLabel>Order ID</FieldLabel>
            <Input placeholder="ID..." />
          </Field>
          <Field>
            <FieldLabel>Billing Email</FieldLabel>
            <Input placeholder="Email address" />
          </Field>
        </FieldGroup>
        <Button iconRight={<IoMdArrowForward />}>TRACK ORDER</Button>
      </WrapperMain>
    </motion.section>
  );
};

export default TrackOrderSection;
