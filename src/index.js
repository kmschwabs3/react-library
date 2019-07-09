import React, { Component } from 'react'
import { render } from 'react-dom'

let bookList = [
	{"title": "Pet Symetary", "author": "Stephen King", "pages": 300},
	{"title": "Dead Wake", "author": "Erik Larson", "pages": 250},
	{"title": "The Terror", "author": "Dan Simmons", "pages": 850},
]

//Child Component
const Book = ({title, author, pages}) => {
	return (
		<section>
			<h2>{title}</h2>
			<p>By: {author}</p>
			<p>Pages: {pages} pages</p>
		</section>
		)
}

//Parent Component
class Library extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			open: true
		}
	}
	render () {
		const { books } = this.props
		return (
		<div>
			<h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
			{books.map(
				(book, i) => 
						<Book 
							key={i}
							title={book.title} 
							author={book.author} 
							pages={book.pages}/>
			)}
			
		</div>
		)
	}

}


render(
		<Library books={bookList}/>,
	document.getElementById('root')
)
