import React from 'react'
import ReactDom from 'react-dom'
import '@babel/polyfill'
import App from './App'
import data from './data.json'

const headings = ['When', 'Who', 'Description']

ReactDom.render(
	<App data={data} title="OpenLibrary API" headings={headings} />,
	document.getElementById('App'),
)
