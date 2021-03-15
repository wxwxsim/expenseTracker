import React, {useState} from 'react'
import InputBox from '../../components/InputBox'
import { Button, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { addnew } from '../../model/expenseSlice';
const { Text } = Typography

const AddRecords = ()=>{
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState(null);
  const dispatch = useDispatch();

  const submit = e => {
    e.preventDefault();
    if(+amount===0 || !amount) return
    const newdata = {
      id: Math.floor(Math.random() * 100000000),
      desc,
      amount: +amount
    }
    dispatch(addnew(newdata))
    setDesc('')
    setAmount(null)
  }

  return (
    <>
      <form>
        <Text style={{fontSize:24}}>Add new expense</Text>
        <div style={{paddingTop:12}}>
          <label>Description: </label>
          <InputBox type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Enter description..." />
        </div>
        <div style={{paddingTop:12}}>
          <label>Amount (negative - is expense, positive + is income): </label>
          <InputBox type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
      </form>

      <div style={{textAlign:'center'}}><Button disabled={+amount===0?true:false} style={{width:'100%'}} type='primary' size='large' onClick={submit}>Add</Button></div>
    </>
  )
}
export default AddRecords