function readAsDataURL(file) {
  if (!(file instanceof File)) {
    throw new TypeError('Must be a File')
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = e => resolve(e.target.result)
    reader.onerror = e => reject(`Error reading ${file.name}: ${e.target.result}`)
    reader.readAsDataURL(file)
  });
}

function readAsText(file) {
  if (!(file instanceof File)) {
    throw new TypeError('Must be a File')
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = e => resolve(e.target.result)
    reader.onerror = e => reject(`Error reading ${file.name}: ${e.target.result}`)
    reader.readAsText(file)
  });
}

module.exports = { readAsDataURL, readAsText }
