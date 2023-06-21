import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import TransactionChart from '../components/TransactionChart'
import ProfilePieChart from '../components/ProfilePieChart'
import PopularProducts from '../components/PopularProducts'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<TransactionChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
				<ProfilePieChart />
				<PopularProducts />
			</div>
		</div>
	)
}
