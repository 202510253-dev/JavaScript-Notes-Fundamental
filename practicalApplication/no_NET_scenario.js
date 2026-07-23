async function loadNotes() {
  try {
    const response = await fetch('/api/notes')

    // Server responded but with an error
    if (!response.ok) {
      showMessage('Something went wrong loading notes. Try again.')
      return
    }

    const notes = await response.json()
    renderNotes(notes)

  } catch (err) {
    // fetch() itself threw — almost always means no internet
    if (!navigator.onLine) {
      showMessage('You appear to be offline. Please check your connection.')
    } else {
      showMessage('Could not reach the server. Try again shortly.')
    }
  }
}