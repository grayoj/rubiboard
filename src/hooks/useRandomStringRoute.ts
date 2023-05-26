import { v4 as uuidv4 } from 'uuid';

export function generateRandomString(): string {
 return uuidv4();
}

export const randomRoutePath = generateRandomString();

