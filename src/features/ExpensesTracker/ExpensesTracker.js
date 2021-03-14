import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppTitle from '../../components/AppTitle'
import AddRecords from './AddRecords'
import TableList from '../../components/TableList'
import TotalAmount from '../../components/TotalAmount'
import ExpenseIncome from '../../components/ExpenseIncome'
import { selectAllExpense, deleteexpense} from '../../model/expenseSlice';
import DeleteConfirm from '../../components/DeleteConfirm'
import { Row, Col } from 'antd'

const appTitle = 'Expense Tracker App'

const ExpensesTracker = ()=>{
    const allExpense = useSelector(selectAllExpense) || {};
    const dispatch = useDispatch();

    const deleteitem = (id) =>{
      dispatch(deleteexpense(id))
    }

    const columns = [
      {
        title: "Description",
        key: "desc",
        dataIndex: "desc",
        align: "center",
      },
      {
        title: "Amount",
        key: "amount",
        dataIndex: "amount",
        align: "center",
      },
      {
        dataIndex: 'menu',
        key: 'menu',
        className: 'menu',
        width: 70,
        render: (_, item) => (
          <DeleteConfirm confirm={()=>deleteitem(item.id)}/>
        )
      }
    ];

    return (
          <div>
              <AppTitle text={appTitle} titlestyle={{fontSize:32}}></AppTitle>
              <Row>
                  <Col span={11}><AddRecords/></Col>
                  <Col span={11} offset={2} style={{border: '1px solid #000000'}}><ExpenseIncome/></Col>
              </Row>
              <TableList scrollwidth={{ x: 1100, y: 'calc(100vh - 50em)' }} dataColumns={columns} tableTitle='All history' dataItems={allExpense.expensedata}/>
              <TotalAmount amountStyle={{float:'right'}}/>
          </div>
    );
}

export default ExpensesTracker