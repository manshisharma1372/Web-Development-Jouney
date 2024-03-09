
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './Card';

function App() {

  const response=[
    {
      itemName: "Nirma",
      itemDate:"20",
      itemMonth: "June",
      itemYear:  "2023"
    },
    {
      itemName: "Nirma2",
      itemDate:"202",
      itemMonth: "June2",
      itemYear:  "20232"
    },
    {
      itemName: "Nirma3",
      itemDate:"203",
      itemMonth: "June3",
      itemYear:  "20233"
    },
  ];

  return (
    <div>
    <Card>
    <Item name={response[0].itemName}>

    namaste sabko

      </Item>
      <ItemDate day={response[0].itemDate} month= {response[0].itemMonth} year={response[0].itemYear}></ItemDate>

      <Item name= {response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month= {response[1].itemMonth} year={response[1].itemYear}></ItemDate>

      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate} month= {response[2].itemMonth} year={response[2].itemYear}></ItemDate>
    <div className="App"> Hello Guys </div>
    </Card>
      
    </div>
  );
}

export default App;
