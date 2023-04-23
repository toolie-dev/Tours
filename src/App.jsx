import { useEffect, useState } from 'react'
import Tour from './components/Tour'
import Loading from './components/Loading'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [tours, setTours] = useState([])
  const [error, setError] = useState(false)

  const fetchTours = async () => {
    try {
      setLoading(true)
      const response = await fetch(url)
      if (!response.ok) {
        setError(true)
        return
      }
      const tours = await response.json()
      setTours(tours)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id != id))
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button
            style={{ marginTop: '2rem' }}
            className='btn'
            onClick={() => fetchTours()}
          >
            refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <section>
        <div className='title'>
          <h2>Our tours</h2>
          <div className='title-underline'></div>
        </div>
        <div className='tours'>
          {tours.map((tour) => (
            <Tour
              key={tour.id}
              {...tour}
              removeTour={() => removeTour(tour.id)}
            />
          ))}
          {error ? <h3 style={{ textAlign: 'center' }}>Fetch error</h3> : null}
        </div>
      </section>
    </main>
  )
}

export default App
