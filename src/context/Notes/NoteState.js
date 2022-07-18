import React from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

  const notes = [{
    "user": "62b614f9971c49cca436a5f8",
    "title": "Go To Work",
    "description": "Personal",
    "tag": "Not",
    "_id": "62b9d1f92af36793bf7e71c16",
    "date": "2022-06-27T15:51:21.831Z",
    "__v": 0
  },
  {
    "user": "62b614f9971c49cca436a5f9",
    "title": "Go To Work",
    "description": "Personal",
    "tag": "Not",
    "_id": "62b9d1f92af36793bf7e71c5",
    "date": "2022-06-27T15:51:21.831Z",
    "__v": 0
  },
  {
    "user": "62b614f9971c49cca436a5f7",
    "title": "Go To Work",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, pariatur iusto! Tempore similique ipsa, minima quibusdam error aliquid cumque mollitia earum fuga veniam excepturi nostrum itaque repellendus architecto eligendi nulla consectetur ducimus, iste numquam nemo.",
    "tag": "Not",
    "_id": "62b9d1f92af36793bf7e71c1",
    "date": "2022-06-27T15:51:21.831Z",
    "__v": 0
  },
  {
    "user": "62b614f9971c49cca436a5f6",
    "title": "Go To Work",
    "description": "Personal",
    "tag": "Not",
    "_id": "62b9d1f92af36793bf7e71c2",
    "date": "2022-06-27T15:51:21.831Z",
    "__v": 0
  }, {
    "user": "62b614f9971c49cca436a5f5",
    "title": "Go To Work",
    "description": "Personal",
    "tag": "Not",
    "_id": "62b9d1f92af36793bf7e71c3",
    "date": "2022-06-27T15:51:21.831Z",
    "__v": 0
  }, {
    "user": "62b614f9971c49cca436a5f4",
    "title": "Go To Work",
    "description": "Personal",
    "tag": "Not",
    "_id": "62b9d1f92af36793bf7e71c4",
    "date": "2022-06-27T15:51:21.831Z",
    "__v": 0
  }]

  const [note, setnote] = React.useState(notes)
  const [click, setClick] = React.useState(false)
  const [id, setId] = React.useState()
  const [value, setValue] = React.useState({
    title: "",
    description: ""
  })

  return (
    <NoteContext.Provider value={{ note, setnote, click, setClick, id, setId, value, setValue }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState