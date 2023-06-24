export interface Delivery {
 id: number;
 customerName: string;
 customerEmail: string;
 customerNumber: string;
 dropAddress: string;
 pickupAddress: string;
 packageName: string;
 packageType: string;
 amount: number;
 timestamp: string;
 delivered: boolean;
 rider: string
 status: string;
}

export interface DeliveryResponse {
 content: Delivery[];
 totalPages: number;
}