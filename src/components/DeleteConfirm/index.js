import React from 'react'
import { Popconfirm } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const text = 'Are you sure to delete this record?';

const DeleteConfirm = (props)=>{
	const { confirm} = props
	return (
        <Popconfirm
          placement="topRight"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined/>
      </Popconfirm>
	)
}
export default DeleteConfirm