// import TextField from "@mui/material/TextField";
// import "./App.css";
// import Link from "@mui/material/Link";
// import { useState } from "react";
// import Checkbox from "@mui/material/Checkbox";

// export default function App() {
//   let task = [
//     { check: false, todo: "To Do Daily Task" },
//     { check: false, todo: "To Do Class Task" },
//     { check: false, todo: "To Do todo Task" },
//   ];
//   const [tasks, settask] = useState(task);

//   const add = (event) => {
//     if (event.code === "Enter") {
//       settask([...tasks, { check: false, todo: event.target.value }]);
//       event.target.value="";
//     }
//   };

//   const [show, setShow] = useState(true);
//   const [show1, setShow1] = useState(false);
//   const [show2, setshow2] = useState(false);

//   return (
//     <div id="forbackground">
//       <div id="main-frame">
//         <div>
//           <TextField
//             id="outlined-basic"
//             label="Text"
//             variant="outlined"
//             onKeyPress={(event) => add(event)}
//           />
//         </div>

//         <div id="links">
//           <div>
//             <Link
//               component="button"
//               variant="body2"
//               underline="none"
//               onClick={() => {
//                 setShow(true);
//                 setShow1(false);
//                 setshow2(false);
//               }}
//             >
//               ALL
//             </Link>
//           </div>

//           <div>

//             <Link
//               component="button"
//               variant="body2"
//               underline="none"
//               onClick={() => {
//                 setShow(false);
//                 setShow1(true);
//                 setshow2(false);
//               }}
//             >
//               Active
//             </Link>
//           </div>

//           <div>
//             <Link
//               component="button"
//               variant="body2"
//               underline="none"
//               onClick={() => {
//                 setShow(false);
//                 setShow1(false);
//                 setshow2(true);
//               }}
//             >
//               Completed
//             </Link>
//           </div>
//         </div>
//         <div>
//           {show
//             ? tasks.map(({ check, todo }, index) => (
//                 <Task
//                   str={todo}
//                   tasks={tasks}
//                   check={check}
//                   settask={settask}
//                 />
//               ))
//             : ""}

//           {show1
//             ? tasks
//                 .filter(({ check }) => check === false)
//                 .map(({ check, todo }, index) => (
//                   <Task
//                     str={todo}
//                     tasks={tasks}
//                     check={check}
//                     settask={settask}
//                   />
//                 ))
//             : ""}

//           {show2
//             ? tasks
//                 .filter(({ check }) => check === true)
//                 .map(({ check, todo }) => (
//                   <Task
//                     str={todo}
//                     tasks={tasks}
//                     check={check}
//                     settask={settask}
//                   />
//                 ))
//             : ""}
//         </div>
//       </div>
//     </div>
//   );
// }

// function Task({ str, tasks, check, settask }) {
//   const change = () => {
//     for (var t of tasks) {
//       if (t.todo === str) {
//         t.check = !check;
//         settask([...tasks]);
//       }
//     }
//   };
//   return (
//     <div>
//       {check === true ? (
//         <Checkbox label={str} onClick={() => change()} defaultChecked />
//       ) : (
//         <Checkbox label={str} onClick={() => change()} />
//       )}
//       <span>{str}</span>
//     </div>
//   );
// }

import TextField from "@mui/material/TextField";
import "./App.css";
import Link from "@mui/material/Link";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

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
