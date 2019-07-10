import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Book } from './Book'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'

//Parent Component
class Library extends React.Component{
	//Default Data to Display
	static defaultProps = {
		books: [
		{"title": "Kitchen Confidential", "author": "Anthony Bourdain", "pages": 234}]
	}

	//this sets the state without the longer format
	state ={ 
		open: true,
		freeBookmark: true,
		hiring: false,
		data: [],
		loading: false
		}

	componentDidMount() {
		this.setState({loading: true})
		fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
			.then(data => data.json())
			.then(data => this.setState({data, loading: false}))
	}

	componentDidUpdate() {
		console.log('This updated.')
	}

	//function below binds toggleOpenClosed
	toggleOpenClosed = () => {
		this.setState(prevState => ({
			open: !prevState.open
		}))
	}

	render () {
		const { books } = this.props
		return (
		<div>
			{this.state.hiring ? <Hiring /> : <NotHiring />}
			{this.state.loading 
				? 'loading...'
				: 	<div>
						{this.state.data.map(product => {
							return (
								<div key={product.id}>
									<h3>Library Product of the Week!</h3>
									<h4>{product.name}</h4>
									<img src={product.image} alt={product.name} height={100}/>
								</div>
								)
						})}
					</div>
			}
			<h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
			<button onClick={this.toggleOpenClosed}>Change</button>
			{books.map(
				(book, i) => 
						<Book 
							key={i}
							title={book.title} 
							author={book.author} 
							pages={book.pages}
							freeBookmark={this.state.freeBookmark}/>
			)}	
		</div>
		)
	}

}

//debugs values if input improperly
Library.propTypes = {
	books: PropTypes.array
}

Book.propTypes = {
	title: PropTypes.string,
	author: PropTypes.string,
	pages: PropTypes.number,
	freeBookmark: PropTypes.bool
}

export default Library