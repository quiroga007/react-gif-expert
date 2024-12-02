import { useState } from "react";


 
export const AddCategory = ({onNewCategory}) => {
  const [inputvalue, setInputValue]=useState("");
  const onInputChanged= ({target}) =>{
         setInputValue(target.value);
  }
  const onSubmit=(event)=>{
    event.preventDefault();
 if(inputvalue.trim().length<=1) return;
    
 //  setCategories(categories=>[inputvalue,...categories]);
 setInputValue("");
 onNewCategory(inputvalue.trim());
 
  
}

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputvalue}
        onChange={onInputChanged}
    /> 
    </form>
    
  )
}
