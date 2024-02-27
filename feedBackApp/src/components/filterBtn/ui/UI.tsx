import React from 'react'
import { filterFeedBack } from '../../store/dataSlice'
import { useDispatch } from 'react-redux'

const UI = () => {
  const dispatch=useDispatch()

  const handleFilter=()=>{
    dispatch(filterFeedBack('UI'))
  }

  return (
    <button className="FilterBtn" onClick={handleFilter}>UI</button>
  )
}

export default UI
