import Card from '../UI/Card';
import ExpenseItems from "./Expenseitem";
import './Expenses.css';

const Expenses =(props)=>{
    return(
        <Card className="expenses">
        <ExpenseItems  title= {props.item[0].title} amount = {props.item[0].amount} date={props.item[0].date}/>
        <ExpenseItems title={props.item[1].title}amount ={props.item[1].amount}  date={props.item[1].date}/>
        <ExpenseItems title= {props.item[2].title} amount ={ props.item[2].amount} date={props.item[2].date}/>
        <ExpenseItems title= {props.item[3].title}amount ={props.item[3].amount} date={props.item[3].date}/>
        </Card>


    );
}

export default Expenses;