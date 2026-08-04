"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { isValidIBAN } from "ibantools";
import { Loader2 } from "lucide-react";
import { saveStage4Banking } from "@/app/actions/issuer-onboarding";

const bankingSchema = z.object({
  bank_name: z.string().min(2, "Bank name is required"),
  account_holder_name: z.string().min(2, "Account holder name is required"),
  iban: z.string().min(1, "IBAN is required").refine(val => isValidIBAN(val.replace(/\s+/g, '')), {
    message: "Invalid IBAN number",
  }),
});

export default function Stage4Banking({ data, onSave, onNext, onBack }) {
  const [isSaving, setIsSaving] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: zodResolver(bankingSchema),
    defaultValues: {
      bank_name: data.bank_details?.bank_name || "",
      account_holder_name: data.bank_details?.account_holder_name || "",
      iban: data.bank_details?.iban || "",
    }
  });

  const onSubmit = async (formData) => {
    setIsSaving(true);
    try {
      const bankDetails = {
        bank_name: formData.bank_name,
        account_holder_name: formData.account_holder_name,
        iban: formData.iban.replace(/\s+/g, ''),
      };

      await saveStage4Banking(bankDetails);
      onSave({ bank_details: bankDetails, bank_verification_status: "pending" });
      onNext();
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setIsSaving(false);
    }
  };

  const onSaveDraft = async () => {
    const formData = watch();
    setIsSaving(true);
    try {
      const bankDetails = {
        bank_name: formData.bank_name,
        account_holder_name: formData.account_holder_name,
        iban: formData.iban ? formData.iban.replace(/\s+/g, '') : "",
      };

      await saveStage4Banking(bankDetails);
      onSave({ bank_details: bankDetails, bank_verification_status: "pending" });
      alert("Draft saved successfully.");
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Banking Details</h3>
        <p className="text-sm text-gray-500 mb-6">Enter the primary corporate bank account details. The IBAN will be validated instantly.</p>
        <p className="text-sm text-red-500 font-medium">* Indicates a required field</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Bank Name <span className="text-red-500">*</span></label>
          <input 
            type="text" 
            {...register("bank_name")} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#064e3b] focus:ring-[#064e3b] sm:text-sm p-2 border" 
          />
          {errors.bank_name && <p className="mt-1 text-sm text-red-600">{errors.bank_name.message}</p>}
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Account Holder Name <span className="text-red-500">*</span></label>
          <input 
            type="text" 
            {...register("account_holder_name")} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#064e3b] focus:ring-[#064e3b] sm:text-sm p-2 border" 
          />
          {errors.account_holder_name && <p className="mt-1 text-sm text-red-600">{errors.account_holder_name.message}</p>}
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">IBAN <span className="text-red-500">*</span></label>
          <input 
            type="text" 
            {...register("iban")} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#064e3b] focus:ring-[#064e3b] sm:text-sm p-2 border uppercase font-mono" 
          />
          {errors.iban && <p className="mt-1 text-sm text-red-600">{errors.iban.message}</p>}
        </div>
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
        <button 
          type="button" 
          onClick={onBack}
          disabled={isSaving}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors disabled:opacity-50"
        >
          Back
        </button>
        <div className="space-x-4 flex">
          <button 
            type="button" 
            onClick={onSaveDraft}
            disabled={isSaving}
            className="px-6 py-2 border border-[#064e3b] text-[#064e3b] rounded-md font-medium hover:bg-[#064e3b]/5 transition-colors disabled:opacity-50"
          >
            Save for Later
          </button>
          <button 
            type="submit" 
            disabled={isSaving}
            className="flex items-center px-6 py-2 bg-[#064e3b] text-white rounded-md font-medium hover:bg-[#064e3b]/90 transition-colors disabled:opacity-50"
          >
            {isSaving ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Saving...</> : "Save and Continue"}
          </button>
        </div>
      </div>
    </form>
  );
}
