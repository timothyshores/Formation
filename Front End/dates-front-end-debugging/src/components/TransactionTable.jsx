import React, { useState } from "react";

function TransactionTable({ txns }) {
	const [date, setDates] = useState(new Date());
	const sort = () => {};

	const filterItem = (e) => {
		e.preventDefault();
		setDates(e.target.value);
		// console.log("hey target value");
	};

	txns.filter((i) => {
		return i.date.match(date);
	});
	// console.log(date);

	console.log(txns);

	return (
		<div className="layout-column align-items-center mt-50">
			<section className="layout-row align-items-center justify-content-center">
				<label className="mr-10">Transaction Date</label>
				<input id="date" type="date" defaultValue="2019-11-29" onChange="" />
				<button className="small" onClick={filterItem} value={date}>
					{console.log(date)}
					Filter
				</button>
			</section>

			<div className="card mt-50">
				<table className="table">
					<thead>
						<tr className="table">
							<th className="table-header">Date</th>
							<th className="table-header">Description</th>
							<th className="table-header">Type</th>
							<th className="table-header">
								<span id="amount" onClick={sort}>
									Amount ($)
								</span>
							</th>
							<th className="table-header">Available Balance</th>
						</tr>
					</thead>
					<tbody>
						{txns.map((tran) => {
							return (
								<tr>
									<td>{tran.date}</td>
									<td>{tran.description}</td>
									<td>{tran.type === 1 ? "Debit" : "Credit"}</td>
									<td>{tran.amount}</td>
									<td>{tran.balance}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default TransactionTable;
