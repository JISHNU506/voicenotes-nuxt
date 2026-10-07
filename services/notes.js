import axios from 'axios'

const API_URL = 'https://api.voicenotes.com/api'

export async function getNote(slug) {
  const response = await axios.get(`${API_URL}/public/recordings/${slug}`, {
    params: { segments: true },
  })

  const note = response.data.data

  return {
    title: note.title,
    author: note.user_name,
    authorImage: note.user_image,
    date: note.recorded_at,
    transcript: note.transcript,
  }
}
