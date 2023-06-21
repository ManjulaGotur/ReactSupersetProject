import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'transactions',
		label: 'Transactions',
		path: '/transactions',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'products',
		label: 'Shedules',
		path: '/shedules',
		icon: <HiOutlineCube />
	},
	{
		key: 'customers',
		label: 'Users',
		path: '/users',
		icon: <HiOutlineUsers />
	},
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	
	{
		key: 'support',
		label: 'Help',
		path: '/help',
	},
	{
		key: 'support',
		label: 'Contact Us',
		path: '/contact',
	}
]
