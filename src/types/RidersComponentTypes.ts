export interface User {
 firstName: string;
 lastName: string;
 phoneNumber: string;
 streetAddress: string;
 email: string;
 id: number;
}

export interface RiderData {
 content: User[];
 totalPages: number;
}
