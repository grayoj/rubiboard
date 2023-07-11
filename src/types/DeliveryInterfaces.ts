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
 deliveryRider: string;
 deliveryTime: string;
}

export interface Payments {
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
 referenceCode: string;
}

export interface DeliveryResponse {
 totalElements: number;
 content: Delivery[];
 totalPages: number;
}

export interface PaymentResponse {
 content: Payments[];
 totalPages: number;
}