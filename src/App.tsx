import { GifGrid, Header, SearchCategory } from "./components";

import { iCategory } from './core/interfaces/iCategory.interface';
import { useState } from "react";
function App() {
  const [categories, setCategories] = useState<iCategory[]>([{uuid: crypto.randomUUID(),name: "gif"}]);

  const onAddCategory = (newCategory: iCategory) => {
    if (categories.some(category => category.name === newCategory.name)) return;
    
    setCategories([newCategory,...categories])
  }

  return (
    <>
      <Header></Header>
      <main className="px-5">
        <SearchCategory onNewCategory={onAddCategory} />
          {categories.map((category) => 
             (
              <GifGrid key={ category.uuid } category={category}/>
            )
          )}
      </main>
    </>
  );
}

export default App;
