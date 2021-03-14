import React, { forwardRef } from 'react'
import { Input } from 'antd';

const InputBox = forwardRef((props, ref) => {
	const { placeholder, type } = props
	const inputstyle = {marginBottom:24, borderRadius: 0, fontSize: 14, color: '#8a8a8a'}

	return (
		<Input
			ref={ref}
			style={inputstyle}
            type={type}
			placeholder={placeholder||'Enter input'}
			{...props}
		/>
	)
})

export default InputBox
