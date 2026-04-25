import { useMovies } from "../context/MoviesContext";
/* importing loader animation */
import { DotStream } from 'ldrs/react'
import 'ldrs/react/DotStream.css'

export default function Loader({ color = '#ffc107' }) {

  const { loading } = useMovies();

  if (!loading) return null;

  return (
    <DotStream
      size="60"
      speed="2.5"
      color={color}
    />
  )
}


/* 📌 Usage guide:

🟡 For default color (#ffc107) use `<Loader />`

🌈 For other colors use `<Loader color="yourColorHere" />`
*/