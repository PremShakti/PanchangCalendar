"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useSelector } from "react-redux";
import { DialogClose, DialogFooter } from "../ui/dialog";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";

// Validation schema
const messageSchema = z.object({
  message: z
    .string()
    .min(1, "Message cannot be empty")
    .max(280, "Message cannot exceed 280 characters"),
});

type MessageFormData = z.infer<typeof messageSchema>;

const UserTextForm = () => {
  const isWriteForm = useSelector((state: any) => state.cart.isWriteForm);
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [existingTodo, setExistingTodo] = useState<any>(null);

  // Get date from URL parameters
  const date =
    searchParams.get("date") || new Date().toISOString().split("T")[0];

  const form = useForm<MessageFormData>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      message: "",
    },
    mode: "onChange", // Enable real-time validation
  });

  const messageValue = form.watch("message");
  const remainingChars = 280 - (messageValue?.length || 0);

  // Load existing todo when form opens or date changes
  useEffect(() => {
    if (isWriteForm && date) {
      loadExistingTodo();
    }
  }, [isWriteForm, date]);

  const loadExistingTodo = async () => {
    console.log("loading..");
    try {
      setIsLoading(true);

      const response = await fetch(`/api/todos/get-todo?date=${date}`, {
        method: "GET",
        credentials: "include", // Include cookies
        cache: "no-store",
      });

      const data = await response.json();
      console.log("API Response:", response.status, data); // Enhanced debug log

      if (response.ok) {
        if (data.success && data.todo) {
          console.log("Todo loaded:", data.todo); // Debug log
          setExistingTodo(data.todo);

          // Use reset instead of setValue to ensure form is properly updated
          form.reset({
            message: data.todo.message,
          });

          console.log("Form value set to:", data.todo.message); // Debug log
          toast.success("Existing todo loaded");
        } else {
          console.log("No todo found for date:", date); // Debug log
          setExistingTodo(null);
          form.reset({
            message: "",
          });
        }
      } else {
        console.error("API Error:", response.status, data);
        if (response.status === 401) {
          toast.error("Please log in to access your todos");
        } else {
          toast.error("Failed to load existing todo");
        }
        setExistingTodo(null);
        form.reset({
          message: "",
        });
      }
    } catch (error) {
      console.error("Error loading todo:", error);
      toast.error("Failed to load existing todo");
      setExistingTodo(null);
      form.reset({
        message: "",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: MessageFormData) => {
    try {
      setIsLoading(true);

      const requestBody = {
        message: data.message,
        date: date,
      };

      // Determine if we should create or update
      const isUpdate = existingTodo !== null;
      const endpoint = isUpdate
        ? "/api/todos/update-todo"
        : "/api/todos/save-todo";
      const method = isUpdate ? "PUT" : "POST";

      console.log("Submitting:", { isUpdate, endpoint, method, requestBody }); // Debug log

      const response = await fetch(endpoint, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(requestBody),
      });

      const result = await response.json();
      console.log("Submit response:", response.status, result); // Debug log

      if (response.ok) {
        toast.success(
          isUpdate ? "Todo updated successfully!" : "Todo saved successfully!",
          {
            description: `Your note for ${date} has been ${
              isUpdate ? "updated" : "saved"
            }.`,
          }
        );

        // Update existing todo state
        setExistingTodo(result.todo);

        // Don't reset form to keep the saved content
        // form.reset();
      } else {
        // Handle 409 conflict (todo already exists)
        if (response.status === 409) {
          console.log("Todo already exists, switching to update mode");
          toast.info("Todo already exists, updating instead...");

          // Reload existing data and switch to update mode
          await loadExistingTodo();

          // Try to update instead
          const updateResponse = await fetch("/api/todos/update-todo", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(requestBody),
          });

          const updateResult = await updateResponse.json();

          if (updateResponse.ok) {
            toast.success("Todo updated successfully!", {
              description: `Your note for ${date} has been updated.`,
            });
            setExistingTodo(updateResult.todo);
          } else {
            toast.error("Failed to update todo", {
              description: updateResult.error || "Please try again.",
            });
          }
        } else {
          toast.error(
            isUpdate ? "Failed to update todo" : "Failed to save todo",
            {
              description: result.error || "Please try again.",
            }
          );
        }
      }
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("An error occurred", {
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadExistingTodo();
    console.log("abc");
  }, [date]);
  return (
    <div className={` `}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">
          {existingTodo ? `Editing note for ${date}` : `New note for ${date}`}
        </span>
        <span
          className={`text-sm ${
            remainingChars < 20
              ? "text-red-500"
              : remainingChars < 50
              ? "text-orange-500"
              : "text-muted-foreground"
          }`}
        >
          {remainingChars} / 280 characters remaining
        </span>
      </div>

      {isLoading && (
        <div className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>
          Loading existing todo...
        </div>
      )}

      {!isLoading && existingTodo && (
        <div className="text-sm text-green-600 mb-2 p-2 bg-green-50 rounded-md border border-green-200">
          ✓ Existing note loaded for {date} - {existingTodo.message.length}{" "}
          characters
        </div>
      )}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="h-full w-full px-2 "
        >
          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className=" h-full w-full  ">
                <FormControl>
                  {/* <Textarea
                    placeholder={`Type your note for ${date}...`}
                    className="w-full h-[95%] resize-none min-h-[200px]"
                    maxLength={280}
                    disabled={isLoading}
                    {...field}
                  /> */}
                       <Textarea
                id="writing-area"
                // value={text}
                // onChange={(e) => setText(e.target.value)}
                placeholder="Start writing here..."
                className="min-h-96 bg-transparent border-none resize-none text-lg font-serif leading-8 text-gray-800 placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    transparent,
                    transparent 31px,
                    #e5e7eb 31px,
                    #e5e7eb 32px
                  )`,
                }}
              />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-end">
            <Button
              type="submit"
              disabled={
                isLoading || !messageValue?.trim() || remainingChars < 0
              }
              className=" mt-4"
            >
              {isLoading
                ? "Saving..."
                : existingTodo
                ? "Update Note"
                : "Save Note"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UserTextForm;
