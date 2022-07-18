import React from 'react'
import noteContext from '../context/Notes/NoteContext'
import Note from './note'
import CreateArea from './createarea'
import Modal from './modal'



export default function Home() {

  const context = React.useContext(noteContext)
  const { note, click } = context



  return (
    <div className='m-4'>
      {click ? <Modal /> : null}
      <CreateArea />
      <div className='grid xl:grid-cols-6 lg:grid-cols-5 lg:gap-4 xl:gap-4 md:grid-cols-4 md:gap-3 sm:grid-cols-3 sm:gap-2 xs:grid-cols-2 xs:gap-2'>
        {note.map((item, index) => {

          return (
            <Note length={item.description.length} key={index} id={item._id} item={item} />
          )


        })}
      </div>
    </div>
  )
}

