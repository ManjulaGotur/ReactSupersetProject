import React from 'react'
import './topproduct.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
	{
		Guest: 200,
		User: 100
	},
	{
		name: 'Week 1',
		Guest: 400,
		User: 420
	},
	{
		name: 'Week 2',
		Guest: 200,
		User: 150
	},
	{
		name: 'Week 3',
		Guest: 300,
		User: 450
	},
	{
		name: 'Week 4',
		Guest: 210,
		User: 180
	},
	{
		Guest: 450,
		User: 250
	}
]

export default function TransactionChart() {
	return (
		<div className=" tran-chart h-[22rem] bg-white p-4 mr-3 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Activities</strong>
			<div>May-June2021</div>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5, }} >
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
          				<YAxis />
          				<Tooltip />
          				<Legend />
          				<Line type="monotone" dataKey="Guest" stroke="pink" activeDot={{ r: 8 }} />
          				<Line type="monotone" dataKey="User" stroke="green" />
        			</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
