// Hand-written to match supabase/migrations/0001_init.sql. Regenerate with
// `supabase gen types typescript` once a live project is linked, and keep
// this file in sync with any future migration.

export type UserRole = "member" | "admin";
export type SexType = "male" | "female";
export type ProductAudience = "everyone" | "women";
export type BillingType = "recurring" | "one_time";
export type MembershipStatus = "pending" | "active" | "inactive" | "cancelled";
export type PricingType =
  | "standard"
  | "custom_recurring"
  | "custom_one_time"
  | "complimentary";

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          first_name: string | null;
          last_name: string | null;
          phone: string | null;
          date_of_birth: string | null;
          sex: SexType | null;
          role: UserRole;
          profile_completed: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          first_name?: string | null;
          last_name?: string | null;
          phone?: string | null;
          date_of_birth?: string | null;
          sex?: SexType | null;
          role?: UserRole;
          profile_completed?: boolean;
        };
        Update: {
          first_name?: string | null;
          last_name?: string | null;
          phone?: string | null;
          date_of_birth?: string | null;
          sex?: SexType | null;
          role?: UserRole;
          profile_completed?: boolean;
        };
        Relationships: [];
      };
      products: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          audience: ProductAudience;
          billing_type: BillingType;
          standard_price: number;
          currency: string;
          active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          name: string;
          slug: string;
          description?: string | null;
          audience?: ProductAudience;
          billing_type: BillingType;
          standard_price: number;
          currency?: string;
          active?: boolean;
        };
        Update: {
          name?: string;
          slug?: string;
          description?: string | null;
          audience?: ProductAudience;
          billing_type?: BillingType;
          standard_price?: number;
          currency?: string;
          active?: boolean;
        };
        Relationships: [];
      };
      memberships: {
        Row: {
          id: string;
          user_id: string;
          product_id: string;
          status: MembershipStatus;
          pricing_type: PricingType;
          amount_paid: number | null;
          currency: string;
          is_recurring: boolean;
          start_date: string | null;
          end_date: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          product_id: string;
          status?: MembershipStatus;
          pricing_type?: PricingType;
          amount_paid?: number | null;
          currency?: string;
          is_recurring?: boolean;
          start_date?: string | null;
          end_date?: string | null;
        };
        Update: {
          status?: MembershipStatus;
          pricing_type?: PricingType;
          amount_paid?: number | null;
          currency?: string;
          is_recurring?: boolean;
          start_date?: string | null;
          end_date?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "memberships_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "memberships_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
  };
};

export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
export type Product = Database["public"]["Tables"]["products"]["Row"];
export type Membership = Database["public"]["Tables"]["memberships"]["Row"];

export type MembershipWithProduct = Membership & { product: Product };
