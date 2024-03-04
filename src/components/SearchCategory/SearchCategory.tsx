import { FormEvent, useState } from "react"

import { iCategory } from "../../core/interfaces/iCategory.interface";

export function SearchCategory({ onNewCategory }) {
    const [inputValue, setInputValue] = useState<string>('')

    const onInputChange = ({target}: FormEvent<HTMLInputElement>) => {
        setInputValue(target.value);
    }

    const onSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1 || !inputValue) return;

        const newCategory: iCategory = {
          uuid: crypto.randomUUID(),
          name: inputValue
        }

        onNewCategory(newCategory)
        setInputValue('')
        
    }

  return (
    <form onSubmit={onSearchSubmit}>
        <input className="text-black" type="text" placeholder="One Punch" id="text_search" value={inputValue} onChange={onInputChange}/>
    </form>
  )
}