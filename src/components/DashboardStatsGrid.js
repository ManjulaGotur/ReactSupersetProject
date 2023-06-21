import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'
import './Dashboard.css'



export default function DashboardStatsGrid() {
	return (
		<div className="flex gap-10 mr-3 pb-2" id='dashboard'>
			<div  id="dashboard-box-1">
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<IoBagHandle className="text-2xl text-white" />
				</div>
				<div className="pl-8">
					<span className="text-sm text-gray-500 font-light">Total Revenues</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$2,129,430</strong>
					</div>
				</div>
			</div>
			<div id="dashboard-box-2">
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<IoPieChart className="text-2xl text-white" />
				</div>
				<div className="pl-8">
					<span className="text-sm text-gray-500 font-light">Total Transaction</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">1,520</strong>
					</div>
				</div>
			</div>
			<div id="dashboard-box-3">
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<IoPeople className="text-2xl text-white" />
				</div>
				<div className="pl-8">
					<span className="text-sm text-gray-500 font-light">Total Likes</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">9,721</strong>
					</div>
				</div>
			</div>
			<div id="dashboard-box-4">
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
					<IoCart className="text-2xl text-white" />
				</div>
				<div className="pl-8">
					<span className="text-sm text-gray-500 font-light">Total Users</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">892</strong>
					</div>
				</div>
			</div>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
