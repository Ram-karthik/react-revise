import { useEffect, useState } from 'react';
import './App.css';
import ClickEvent from './basic-prg/ClickEvent';
import Footer from './basic-prg/Footer';
import IncDec from './basic-prg/IncDec';
import ListKey from './basic-prg/ListKey';
import ListKeyOne from './basic-prg/ListKeyOne';
import RandomMsg from './basic-prg/RandomMsg';
import Header from './basic-prg/Header';
import InputControl from './basic-prg/InputControl';
import SearchItem from './basic-prg/SearchItem';
import InputType from './project-challenge-1/InputType';
import DisplayBox from './project-challenge-1/DisplayBox';
import InputRef from './use-ref';
import UseRefUse from './useRefVsuseState';
import UseEffectUsage from './useEffect';

function App() {
  const API_URL = 'http://localhost:3001/items';
  const [items, setItems] = useState([]);
  const [fetchErr, setFetchErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleCheck = (id) => {
    const listItems = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem("toDoList", JSON.stringify(listItems));
  }
  const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems);
    localStorage.setItem("toDoList", JSON.stringify(listItems));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem)
    setNewItem('');
  }

  const [newItem, setNewItem] = useState('');

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item }
    const listItems = [...items, addNewItem];
    setItems(listItems);
    localStorage.setItem("toDoList", JSON.stringify(listItems));
  }

  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Data Not Found!')
        const listItems = await response.json();
        console.log('List Items', listItems);
        setItems(listItems);
        // setFetchErr(null)
      }
      catch (err) {
        // setFetchErr(err.message);
        console.log(err.message);
      }
      finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())()
    }, 2000)
  }, [])

  // const [isDarkText, setIsDarkText] = useState(true);
  // const [colorValue, setColorValue] = useState('');
  // const [hexValue, setHexValue] = useState('');

  return (
    <div className="App">
      {/* <RandomMsg /> */}
      {/* <ClickEvent /> */}
      {/* <IncDec /> */}
      {/* <ListKey /> */}
      <Header title={"Born To Achieve Great Things"} />
      <InputControl newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <SearchItem searchItem={searchItem} setSearchItem={setSearchItem} />
      <main>
        {
          fetchErr && <p>{`Error: ${fetchErr}`}</p>
        }
        {isLoading && <p>Loading...</p>}
        {!isLoading && !fetchErr &&
          <ListKeyOne items={items.filter(item => ((item.item).toLowerCase()).includes((searchItem.toLowerCase())))}
            handleCheck={handleCheck} handleDelete={handleDelete} />
        }
      </main>
      {/* <Footer length={items.length} /> */}
      {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px', padding: '40px' }}>
        <DisplayBox colorValue={colorValue} setColorValue={setColorValue} hexValue={hexValue} isDarkText={isDarkText} />
        <InputType isDarkText={isDarkText} setIsDarkText={setIsDarkText} colorValue={colorValue} setColorValue={setColorValue} setHexValue={setHexValue} />
      </div> */}
      {/* <div className='bdr-line'></div> */}
      {/* <InputRef /> */}
      {/* <UseRefUse /> */}
      {/* <UseEffectUsage /> */}
    </div>
  );
}

export default App;