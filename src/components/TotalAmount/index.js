import React from 'react'
import { Typography } from 'antd'
import { useSelector } from 'react-redux';
import { selectAllExpense} from '../../model/expenseSlice';

const { Text } = Typography
const titletotal = 'Total amount'

const TotalAmount = (props)=>{
	const {amountStyle} = props;
	const expenseModel = useSelector(selectAllExpense) || {};
	const getdataArr = expenseModel.expensedata || []
  	const totalAmt = ((getdataArr.map(v => v.amount)||[]).reduce((acc, item) => (acc += item), 0)||0).toFixed(2);

	return (
		<div style={amountStyle}>
			<Text style={{fontSize:24}}>{titletotal}: </Text>
			<Text style={{color: '#2ecc71'}} >${totalAmt||0}</Text>
		</div>
	)
}
export default TotalAmount