"use client";
import React from "react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { setIsWriteForm } from "@/store/actions/reducers";

const FormTogeAndSubmitBtn = () => {
  const dispatch = useDispatch();
  const isWriteForm = useSelector((state: any) => state.cart.isWriteForm);

  return (
    <div>
      {isWriteForm ? (
        <div className="flex flex-items-center gap-2">
          <Button type="button" onClick={() => dispatch(setIsWriteForm(false))}>
            Back
          </Button>
          <Button type="submit">Save</Button>
        </div>
      ) : (
        <Button type="button" onClick={() => dispatch(setIsWriteForm(true))}>
          Write Somthing..
        </Button>
      )}
    </div>
  );
};

export default FormTogeAndSubmitBtn;
