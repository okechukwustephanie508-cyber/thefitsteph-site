import type {
  Membership,
  MembershipWithProduct,
  Product,
} from "@/lib/types/database";

// Joins memberships to their product row in application code rather than
// via a Postgrest embedded select, so the result stays fully typed without
// hand-maintaining relationship metadata in the Database type.
export function attachProducts(
  memberships: Membership[],
  products: Product[]
): MembershipWithProduct[] {
  const productById = new Map(products.map((product) => [product.id, product]));

  return memberships.flatMap((membership) => {
    const product = productById.get(membership.product_id);
    return product ? [{ ...membership, product }] : [];
  });
}
