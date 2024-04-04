/** @format */

// Backend endpoint to add exercises to a routine
router.post('/api/routine/:routineId/addExercises', (req, res) => {
  const { routineId } = req.params;
  const { exerciseIds } = req.body;

  // Associate selected exercises with the routine
  // For example, create records in a routine_exercise table
  RoutineExercise.bulkCreate(
    exerciseIds.map((exerciseId) => ({ routineId, exerciseId }))
  )
    .then(() => {
      res
        .status(201)
        .json({ message: 'Exercises added to the routine successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Failed to add exercises to the routine' });
    });
});
