import React from 'react'
import noteContext from '../context/Notes/NoteContext'



const Note = ({ item, id, length }) => {
    const context = React.useContext(noteContext)
    const { setnote, note, setClick, setId, setValue } = context



    function clear(event) {
        setnote(note.filter((item) => {
            if (item._id !== event.target.id) {
                return item
            }
        }))
    }

    function edit(event) {
        setClick(true)
        setId(event.target.id)
        note.map((item) => {
            if (item._id === id) {
                setValue({
                    title: item.title,
                    description: item.description
                })
            }
        })
    }

    return (
        <div className={length >= 50 ? "w-full h-fit flex flex-col row-span-2 justify-between bg-yellow-200 rounded-lg border border-yellow-400 mb-3 py-3 px-4" : "w-full h-fit flex flex-col justify-between bg-yellow-200 rounded-lg border border-yellow-400 mb-3 py-3 px-4"}>
            <div>
                <h4 className="text-gray-800 font-bold mb-3">{item.title}</h4>
                <p className="text-gray-800 text-sm">{item.description}</p>
            </div>
            <div>
                <div className="flex items-center justify-between text-gray-800">
                    <p className="text-sm mr-1">March 28, 2020</p>
                    <i id={id} onClick={edit} className="fa-regular fa-pen-to-square cursor-pointer mr-1"></i>
                    <i id={id} onClick={clear} className="fa-regular fa-trash-can cursor-pointer"></i>
                </div>
            </div>
        </div>


    )
}

export default Note