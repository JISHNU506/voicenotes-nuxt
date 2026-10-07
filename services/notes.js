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
    date: formatDate(note.recorded_at),
    paragraphs: splitParagraphs(note.transcript),
  }
}

function splitParagraphs(transcript) {
  return transcript
    .split(/\u2028|<br>/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph)
}

function formatDate(date) {
  return new Date(date).toLocaleString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  })
}
