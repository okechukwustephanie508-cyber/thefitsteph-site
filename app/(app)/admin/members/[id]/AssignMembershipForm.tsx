"use client";

import { useActionState } from "react";
import { assignMembership, type AssignMembershipState } from "./actions";
import SubmitButton from "@/components/auth/SubmitButton";
import type { Product } from "@/lib/types/database";

const initialState: AssignMembershipState = { error: null, success: false };

export default function AssignMembershipForm({
  userId,
  products,
}: {
  userId: string;
  products: Product[];
}) {
  const [state, formAction] = useActionState(assignMembership, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <input type="hidden" name="userId" value={userId} />

      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-ink">Product</span>
        <select
          name="productId"
          required
          defaultValue=""
          className="w-full border border-ink/20 bg-white px-3.5 py-2.5 text-ink outline-none focus:border-green"
        >
          <option value="" disabled>
            Select a product
          </option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
              {product.audience === "women" ? " (women only)" : ""}
            </option>
          ))}
        </select>
      </label>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">Status</span>
          <select
            name="status"
            defaultValue="active"
            className="w-full border border-ink/20 bg-white px-3.5 py-2.5 text-ink outline-none focus:border-green"
          >
            <option value="pending">Pending</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">
            Pricing type
          </span>
          <select
            name="pricingType"
            defaultValue="standard"
            className="w-full border border-ink/20 bg-white px-3.5 py-2.5 text-ink outline-none focus:border-green"
          >
            <option value="standard">Standard price</option>
            <option value="custom_recurring">Custom recurring price</option>
            <option value="custom_one_time">Custom one time price</option>
            <option value="complimentary">Complimentary access</option>
          </select>
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">
            Amount paid
          </span>
          <input
            name="amountPaid"
            type="number"
            min="0"
            step="0.01"
            placeholder="Leave blank to use the standard price"
            className="w-full border border-ink/20 bg-white px-3.5 py-2.5 text-ink outline-none focus:border-green"
          />
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">
            Start date
          </span>
          <input
            name="startDate"
            type="date"
            className="w-full border border-ink/20 bg-white px-3.5 py-2.5 text-ink outline-none focus:border-green"
          />
        </label>
      </div>

      <label className="flex items-center gap-2 text-sm text-ink">
        <input type="checkbox" name="isRecurring" className="h-4 w-4" />
        This is a recurring membership
      </label>

      {state.error ? (
        <p className="text-sm text-red-700" role="alert">
          {state.error}
        </p>
      ) : null}
      {state.success ? (
        <p className="text-sm text-green" role="status">
          Membership assigned.
        </p>
      ) : null}

      <SubmitButton>Assign membership</SubmitButton>
    </form>
  );
}
