import {
  UserCircleIcon,
} from '@heroicons/react/24/solid';

import { Apps, Bicycle, CashOutline, CubeOutline, DocumentAttach, CogOutline, Server } from 'react-ionicons'

export const sidebarItems = [
  {
    name: 'Dashboard',
    icon: Apps,
    current: true,
    href: '/dashboard'
  },
  {
    name: 'Customers',
    icon: UserCircleIcon,
    current: true,
    href: '/dashboard/customers'
  },
  {
    name: 'Manage Riders',
    icon: Bicycle,
    current: true,
    href: '/dashboard/riders'
  },
  {
    name: 'Payments',
    icon: CashOutline,
    current: true,
    href: '/dashboard/payments'
  },
  {
    name: 'Deliveries',
    icon: CubeOutline,
    current: true,
    children: [
      { name: 'Assign Delivery', href: '' },
      { name: 'Manage Delivery', href: '' },
    ],
  },
  {
    name: 'Generate Reports',
    icon: DocumentAttach,
    current: true,
    href: '/dashboard/reports'
  },
  {
    name: 'Services',
    icon: Server,
    current: true,
    children: [
      { name: 'Logistics API', href: '' },
      { name: 'API Keys', href: '' },
    ],
  },
  {
    name: 'Settings',
    icon: CogOutline,
    current: true,
    href: '/dashboard/settings'
  },
];
