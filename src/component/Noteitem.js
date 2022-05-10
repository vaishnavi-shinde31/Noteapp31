import React from 'react'
import { useContext } from 'react';
 import NoteContext from '../context/NoteContext'


export const Noteitem = (props) => {

   const context = useContext(NoteContext)


  const {note} = props;
  const {deleteNote} = context;
  return (
    <>

<div className="col-md-3">
        <div className="card my-3" >
        
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <p className="card.text">{note.tag}</p>
          <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id)}}></i>
          <i className="fa-solid fa-pen-to-square mx-2"></i>
         
        </div>
        </div>
      </div>
    </>
  )
}