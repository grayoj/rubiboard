export interface PaymentResponse {
 content: {
  id: number;
  status: boolean;
  message: string;
  authorizationUrl: string;
  accessCode: string;
  reference: string;
  amount: number;
  currency: string | null;
  delivery: {
   id: number;
   dropAddress: string;
   pickupAddress: string;
   packageName: string;
   packageType: string;
   deliveryRider: string;
   deliveryRiderNumber: string;
   amount: number;
   vehicleType: string;
   delivered: boolean;
   additionalInformation: string;
   status: string;
   additionalStatus: string;
   deliveryTime: string;
   user: {
    id: number;
    name: string;
    username: string;
    email: string;
    password: string;
    phone: string;
    otp: string | null;
    resetToken: string | null;
    status: string;
    resetTokenExpiration: string | null;
    timestamp: string | null;
    roles: any[]; // You can replace 'any' with the actual role type if available
   };
   rider: {
    id: number;
    name: string;
    phone: string;
    streetAddress: string;
    email: string;
    username: string;
    password: string;
    vehicleNumber: string;
    companyState: string | null;
    companyName: string | null;
    available: boolean;
    timestamp: string | null;
    user: {
     id: number;
     companyName: string;
     username: string;
     email: string;
     password: string;
     cacNumber: string;
     streetAddress: string;
     companyState: string;
     riderNumber: string;
     resetToken: string;
     status: string;
     resetTokenExpiration: string | null;
     timestamp: string | null;
     roles: any[]; // You can replace 'any' with the actual role type if available
    };
    status: string | null;
    roles: any[]; // You can replace 'any' with the actual role type if available
   };
   paymentStatus: string;
  };
  createdAt: string;
 }[];
 pageable: {
  sort: {
   empty: boolean;
   sorted: boolean;
   unsorted: boolean;
  };
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
 };
 totalPages: number;
 totalElements: number;
 last: boolean;
 size: number;
 number: number;
 sort: {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
 };
 numberOfElements: number;
 first: boolean;
 empty: boolean;
}