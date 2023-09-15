import "./App.css";
import { Button } from "@/components/ui/button";
import { Input } from "./components/ui/input";
// import { Label } from "./components/ui/label";
import { Fragment, useState } from "react";

function App() {
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const listBuilder = (): void => {
    setList([...list, value]);
    setValue("");
  };
  const deleteList = (index: number): void => {
    list.splice(index, 1);
    setList([...list]);
  };
  const updateValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    list[index] = e.target.value;
    setList([...list]);
  };

  return (
    <Fragment>
      <h1>TO DO LIST</h1>
      <div className="flex gap-2 justify-center mt-2">
        <Input
          type="text"
          id="todo"
          className="w-48 outline-dashed"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={listBuilder}>&#x2713;</Button>
      </div>
      {list.map((item, index) => {
        return (
          <div className="flex gap-2 justify-center mt-2">
            <Input
              type="text"
              value={item}
              key={index}
              className="w-fit "
              onChange={(e) => updateValue(e, index)}
            />
            <Button variant="destructive" onClick={() => deleteList(index)}>
              <i className="fa fa-trash" />
            </Button>
          </div>
        );
      })}
    </Fragment>
  );
}

export default App;
