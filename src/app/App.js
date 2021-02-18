import React from 'react'
import Heading from './Heading'
import Row from './Row'
import moment from 'moment'

class Headings extends React.Component {
	render() {
		return (
			<thead className="table-success">
				<tr>
					{this.props.headings.map((heading, i) => (
						<Heading heading={heading} key={i} />
					))}
				</tr>
			</thead>
		)
	}
}

class Rows extends React.Component {
	render() {
		return (
			<tbody>
				{this.props.data.map((row, i) => {
					return <Row key={i} change={row} />
				})}
			</tbody>
		)
	}
}

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			data: [],
		}
	}
	componentDidMount() {
		setInterval(async () => {
			try {
				const res = await fetch(
					'http://openlibrary.org/recentchanges.json?limit=10',
				)
				const data = await res.json()
				const formattedData = this.formatData(data)
				this.setState({ data: formattedData })
			} catch (err) {
				console.log(err)
			}
		}, 1000)
	}

	formatData(data) {
		return data.map((data, i) => ({
			when: moment(data.timestamp).startOf('hour').from(),
			who: data.author.key,
			description: data.comment,
		}))
	}

	render() {
		return (
			<div className="container p-4">
				<h1>{this.props.title}</h1>
				<table className="table table-bordered">
					<Headings headings={this.props.headings} />
					<Rows data={this.state.data} />
				</table>
			</div>
		)
	}
}
