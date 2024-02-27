import React from 'react'
import { useDispatch } from 'react-redux'
import { filterFeedBack } from '../../store/dataSlice'

const Enhancement = () => {
  const dispatch=useDispatch()
  const handleFilter=()=>{
    dispatch(filterFeedBack('Enhancement'))}

  return (
    <button className="FilterBtn" onClick={handleFilter}>Enhancement</button>
  )
}

export default Enhancement
