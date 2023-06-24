import { Apps, Bicycle, CubeOutline, DocumentAttach, Server } from 'react-ionicons'

export const sidebarItems = [
  {
    name: 'Dashboard',
    icon: Apps,
    current: true,
    href: '/dashboard'
  },
  // {
  //   name: 'Customers',
  //   icon: UserCircleIcon,
  //   current: true,
  //   href: '/dashboard/customers'
  // },
  {
    name: 'Manage Riders',
    icon: Bicycle,
    current: true,
    href: '/dashboard/riders'
  },
  // {
  //   name: 'Payments',
  //   icon: CashOutline,
  //   current: true,
  //   href: '/dashboard/payments'
  // },
  {
    name: 'Deliveries',
    icon: CubeOutline,
    current: true,
    children: [
      { name: 'Manage Delivery', href: '/dashboard/deliveries' },
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
      { name: 'Logistics API', href: '/api' },
      { name: 'API Keys', href: '/api/keys' },
    ],
  },
  // {
  //   name: 'Settings',
  //   icon: CogOutline,
  //   current: true,
  //   href: '/dashboard/settings'
  // },
];
