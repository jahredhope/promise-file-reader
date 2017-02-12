function readAs (file, as) {
  if (!(file instanceof Blob)) {
    throw new TypeError('Must be a File or Blob')
  }
  return new Promise(function(resolve, reject) {
    const reader = new FileReader()
    reader.onload = function(e) { resolve(e.target.result) }
    reader.onerror = function(e) { reject('Error reading' + file.name + ': ' + e.target.result) }
    reader['readAs' + as](file)
  })
}

function readAsDataURL (file) {
  return readAs(file, 'DataURL')
}

function readAsText (file) {
  return readAs(file, 'Text')
}

function readAsArrayBuffer (file) {
  return readAs(file, 'ArrayBuffer')
}

module.exports = {
  readAsDataURL: readAsDataURL,
  readAsText: readAsText,
  readAsArrayBuffer: readAsArrayBuffer,
}
