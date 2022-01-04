
import TextField from "@mui/material/TextField";
import "./App.css";
import Link from "@mui/material/Link";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import uuid from "react-uuid";

export default function App() {
  let task = [
    { check: false, todo: "To Do Daily Task" },
    { check: false, todo: "To Do Class Task" },
    { check: false, todo: "To Do todo Task" },
  ];
  const [tasks, settask] = useState(task);

  const add = (event) => {
    if (event.code === "Enter") {
      settask([...tasks, { check: false, todo: event.target.value }]);
      event.target.value = "";
    }
  };

  // const adding=()=>{
  //   settask([...tasks, { check: false, todo: event.target.value }]);
  //   event.target.value = "";
  // }

  const [show, setShow] = useState("All");

  return (
    <div id="forbackground">
      <div id="main-frame">
        <div>
          <TextField
            id="outlined-basic"
            label="Text"
            variant="outlined"
            onKeyPress={(event) => add(event)}
          />
          <button>Add</button>
        </div>

        <div id="links">
          <div>
            <Link
              component="button"
              variant="body2"
              underline="none"
              onClick={() => {
                setShow("All");
              }}
            >
              ALL
            </Link>
          </div>

          <div>
            <Link
              component="button"
              variant="body2"
              underline="none"
              onClick={() => {
                setShow("Active");
              }}
            >
              Active
            </Link>
          </div>

          <div>
            <Link
              component="button"
              variant="body2"
              underline="none"
              onClick={() => {
                setShow("Completed");
              }}
            >
              Completed
            </Link>
          </div>
        </div>
        <div>
          {show === "All"
            ? tasks.map(({ check, todo }, index) => (
                <Task
                  str={todo}
                  tasks={tasks}
                  check={check}
                  settask={settask}
                  index={index}
                  key={uuid()}
                />
              ))
            : ""}

          {show === "Active"
            ? tasks
                .filter(({ check }) => check === false)
                .map(({ check, todo }, index) => (
                  <Task
                    str={todo}
                    tasks={tasks}
                    check={check}
                    settask={settask}
                    index={index}
                    key={uuid()}
                  />
                ))
            : ""}

          {show === "Completed"
            ? tasks
                .filter(({ check }) => check === true)
                .map(({ check, todo },index) => (
                  <Task
                    str={todo}
                    tasks={tasks}
                    check={check}
                    settask={settask}
                   index={index}
                   key={uuid()}
                   
                  />
                ))
            : ""}
        </div>
      </div>
    </div>
  );
}

function Task({ str, tasks, check, settask,index}) {
  const change = () => {
    for (var t of tasks) {
      if (t.todo === str) {
        t.check = !check;
        settask([...tasks]);
      }
    }

  };

  const deletes=(index)=>{
    const remaing = tasks.filter((task,inde)=>inde!==index);
    settask(remaing);
  }
  return (
    <div>
      {check === true ? (
        <div>
          <Checkbox label={str} onClick={() => change()} defaultChecked />
          <strike>
            <span>{str}</span>
          </strike>
        </div>
      ) : (
        <div>
          <Checkbox label={str} onClick={() => change()} />
          <span>{str}</span>
        </div>
      )}
      <button onClick={()=>deletes(index)}>Delete</button>
    </div>
  );
}
