// import '../ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

// const expenseDate = new Date(2021, 2, 28);
// const expenseTitle = 'Car Insurance';
// const expenseAmount = 294.67;

  //   <div className='expense-item'>
  //   <div>{expenseDate.toISOString()}</div>
  //   <div className='expense-item__description'>
  //     <h2>{expenseTitle}</h2>
  //     <div className='expense-item__price'>${expenseAmount}</div>
  //   </div>
  // </div>


  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>

  )
}

export default ExpenseItem;