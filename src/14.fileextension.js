function checkFileExtension(){
    const fileName = document.querySelector('#file').value;
    const extension = fileName.split('.').pop();
    // extiension = fileName.substring(fileName.lastIndexOf('.')+1);
    document.querySelector('.output').textContent = extension;
}