import IAddress from "./IAddress.ts";

/**
 * Represents an order inside the Artify system.
 * This type can be saved into the database and queried -> used in frontend.
 */
export default interface IOrder {

    // META
    id: string;             // UUID of the order. Only first 8 characters are shown in frontend (e.g. #a2ac07f3).
    created_at: string;     // ISO date string of when the order was created.
    updated_at: string;     // ISO date string of when the order was last updated.
    status: "capture_pending" | "paid" | "refunded" | "fulfilled"; // Status of the order.

    // USER
    user_uid: string;       // UID of the user associated with the order.
    phone?: string;         // Optional phone number for order updates.

    // Details
    billing_address: IAddress;      // Billing address of the order.
    shipping_address: IAddress;     // Address where the order should be shipped to.
    meta: Record<string, unknown>;

}
