import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {request, success, failure} from '../store/modules/intro'
import Intro from '../components/Intro';
import introApi from '../store/api/intro'

// import fetchData from '../util'

export default () => {
  const { result } = useSelector(state => state.intro)
  const dispatch = useDispatch()


  const get = async () => {
    const result = await introApi()
    dispatch(success(result))
  }
  
  useEffect(()=>{
    get()
    console.log('useEffect')
  },[])
  return <Intro data={result} />
}
