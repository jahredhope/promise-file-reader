# promise-file-reader
Wraps FileReader in a Promise

![](https://travis-ci.org/jahredhope/promise-file-reader.svg?branch=master)

```
npm install --save promise-file-reader
```


```javascript
const PromiseFileReader = require('promise-file-reader')

PromiseFileReader.readAsDataURL(fileData)
  .then(newImage)
  .catch(err => console.error(err))
```


```javascript
import {readAsDataURL, readAsText, readAsArrayBuffer} from 'promise-file-reader'

function newImage(imageDataUrl) {
  ...
}
function newTextFile(text) {
  ...
}
function loadedArrayBuffer(arrayBuffer) {
  ...
}

const fileInput = document.getElementById('file')
fileInput.addEventListener("change", handleFiles, false)
function handleFiles(event) {
  const fileMetaData =  this.files[0]

  if(fileMetaData) {
    if (/^image/.test(fileMetaData.type)) {
      readAsDataURL(fileMetaData)
      .then(newImage)
      .catch(err => console.error(err))
    } else {
      readAsText(fileMetaData)
      .then(newTextFile)
      .catch(err => console.error(err))
    }

    readAsArrayBuffer(fileMetaData)
      .then(loadedArrayBuffer)
      .catch(err => console.error(err))
  }
}
```
