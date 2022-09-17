import { Box } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Exercises from '../Components/Exercises'
import HeroBanner from '../Components/HeroBanner'
import SearchExercises from '../Components/SearchExercises'

const Home = () => {
  //They are in the Home because changes in them is reflected in the whole application like in Searched exercisess and exercises.
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
 
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
      setExercises={setExercises}
      bodyPart={bodyPart}
      exercises={exercises}
      />
    </Box>
  )
}

export default Home