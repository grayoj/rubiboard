import { Apps, Bicycle, CashOutline, CubeOutline, DocumentAttach, Server } from 'react-ionicons'

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
      { name: 'Logistics API', href: '/dashboard/api' },
      { name: 'API Keys', href: '/dashboard/api/keys' },
    ],
  },
  {
    name: 'Payments',
    icon: CashOutline,
    current: true,
    children: [
      { name: 'Payment Records', href: '/dashboard/payments' },
      { name: 'Payment Search', href: '/dashboard/payments/search' },
      { name: 'Records Search', href: '/dashboard/search/payments' }
    ]
  },
  // {
  //   name: 'Settings',
  //   icon: CogOutline,
  //   current: true,
  //   href: '/dashboard/settings'
  // },
];
