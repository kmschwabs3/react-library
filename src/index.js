import React, { Component } from 'react'
import { render } from 'react-dom'
import Library from './Library'


let bookList = [
	{"title": "Pet Symetary", "author": "Stephen King", "pages": 320},
	{"title": "Dead Wake", "author": "Erik Larson", "pages": 250},
	{"title": "The Terror", "author": "Dan Simmons", "pages": 850}
]


render(
		<Library books={bookList}/>,
	document.getElementById('root')
)
