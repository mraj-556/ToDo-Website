import { useState } from 'react';
import './App.css';
import ToDo from './components/ToDo';

function App() {
  
  const [inplist,setinplist] = useState("");
  const [works_itm,set_works] = useState([]);

  function add_work(event){
    return setinplist(event.target.value);
  }

  function works_list(){
    set_works((olditms)=>{
        setinplist("");
        return [...olditms,inplist]; 
    })
  }
  
  function del_work(id){
    console.log("Deleted");
    set_works((olditms)=>{
      return olditms.filter((arr_element,index)=>{
        return index!= id;
      })
    })
  }


  
  return (
    <>
      <div className="main_div">
        <div className='center_div'>
          
          <br />
          <h1>ToDo List</h1>
          <br />
          
          <input type="text" placeholder='Add Works' onChange={add_work} value={inplist} />
          <button onClick={works_list}>+</button>

          <ul>
            {
              works_itm.map(
                function show(itemval,index){
                  return (
                    <ToDo 
                      key={index} 
                      id={index} 
                      text={itemval} 
                      onSelect={del_work} 
                    />
                  )
                }
              )
            }
          </ul>

        </div>        
      </div>
    </>
  );
}

export default App;
