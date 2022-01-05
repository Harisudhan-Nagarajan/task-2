import TextField from "@mui/material/TextField";
import "./App.css";
import Link from "@mui/material/Link";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import uuid from "react-uuid";
import { Button } from "@mui/material";

export default function App() {
  let task = [
    { check: false, todo: "To Do Daily Task" },
    { check: false, todo: "To Do Class Task" },
    { check: false, todo: "To Do todo Task" },
  ];
  const [tasks, settask] = useState(task);
  const [input, setinput] = useState("");

  const add2 = () => {
    if (input !== "") {
      settask([...tasks, { check: false, todo: input }]);
    }
  };

  const add = (event) => {
    if (event.code === "Enter") {
      setinput(event.target.value);
      add2();
    } else {
      setinput(event.target.value);
    }
  };

  const [show, setShow] = useState("All");

  return (
    <div id="forbackground">
      <div id="main-frame">
        <div id="inputs">
          <TextField
            id="outlined-basic"
            label="Enter New Task"
            variant="outlined"
            onKeyUp={(event) => add(event)}
          />
          <Button
            variant="contained"
            onClick={() => add2()}
            id="addbtn"
            color="success"
          >
            Add
          </Button>
        </div>

        <div id="links">
          <div>
            <Link
              component="button"
              color={"black"}
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
              color={"black"}
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
              color={"black"}
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
        </div>
      </div>
    </div>
  );
}

function Task({ str, tasks, check, settask, index }) {
  const change = () => {
    for (var t of tasks) {
      if (t.todo === str) {
        t.check = !check;
        settask([...tasks]);
      }
    }
  };

  const deletes = (index) => {
    const remaing = tasks.filter((task, inde) => inde !== index);
    settask(remaing);
  };
  return (
    <div id="elements">
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
      <Button onClick={() => deletes(index)}>Delete</Button>
    </div>
  );
}
