import React from 'react'
import { Row, Col } from 'antd'
import { useSelector } from 'react-redux';
import { selectAllExpense} from '../../model/expenseSlice';

const ExpenseIncome = (props)=>{
	const expenseModel = useSelector(selectAllExpense) || {};
	const getdataArr = expenseModel.expensedata || []
    const getamounts = getdataArr.map(v => v.amount) || [];
    const getIncome = ((getamounts||[])
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)||0)
        .toFixed(2);
    
    const getExpense = (getamounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);
      
	return (
        <div style={{textAlign:'center'}}>
            <Row>
                <Col span={12}>INCOME</Col>
                <Col span={12}>EXPENSE</Col>
            </Row>
            <Row>
                <Col style={{color: '#2ecc71'}} span={12}>${getIncome}</Col>
                <Col style={{color: 'red'}} span={12}>${getExpense}</Col>
            </Row>
        </div>
	)
}
export default ExpenseIncome