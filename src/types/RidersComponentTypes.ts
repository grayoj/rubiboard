export interface User {
 name: string;
 phone: string;
 streetAddress: string;
 email: string;
 vehicleNumber: string;
 available: string;
 id: number;
}

export interface RiderData {
 content: User[];
 totalPages: number;
}
