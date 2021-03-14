import React from 'react'
import { Typography } from 'antd'
const { Title } = Typography

const AppTitle = (props)=>{
	const { text, titlestyle } = props
	return (
		<Title style={titlestyle}>{text}</Title>
	)
}
export default AppTitle