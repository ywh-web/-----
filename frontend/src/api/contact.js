const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api'

export async function createContactInquiry(payload) {
  const response = await fetch(`${API_BASE_URL}/contact-inquiries/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = await response.json().catch(() => ({}))
  if (!response.ok) {
    const error = new Error(data.message || '提交失败，请稍后再试。')
    error.fields = data.errors || {}
    throw error
  }
  return data
}
