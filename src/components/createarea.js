import React from 'react'
import "../createarea.css"
import noteContext from '../context/Notes/NoteContext'

const CreateArea = () => {
    const [text, settext] = React.useState(false)

    const context = React.useContext(noteContext)
    const { setnote } = context

    function handleClick(event) {
        event.preventDefault()
        console.log("Pressed")
        const dat = {
            'title': event.target.title.value,
            'description': event.target.description.value
        }
        
        setnote(preValues => [...preValues, dat])
    }

    return (
        <div className="mb-10">
            <form onSubmit={handleClick} className="create-note">
                <input id="title" onClick={() => {
                    settext(true)
                }} name="title" placeholder="Title" required minLength={5} />
                {text ? <textarea id="content" name="description" placeholder="Note" rows={text ? 3 : 1} required minLength={5} /> : null}
                <button type='submit'><i className="fa-solid fa-plus"></i></button>
            </form>
        </div>
    )
}

export default CreateArea