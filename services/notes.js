import axios from 'axios'

const API_URL = 'https://api.voicenotes.com/api'

export const noteSlugs = ['iS9L44', 'Apb3rK']

export async function getNote(slug) {
  const response = await axios.get(`${API_URL}/public/recordings/${slug}`, {
    params: { segments: true },
  })

  const note = response.data.data

  return {
    title: note.title,
    author: note.user_name,
    authorImage: note.user_image,
    date: new Date(note.recorded_at).toLocaleString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    }),
    transcript: note.transcript,
  }
}
