let downloadBtn = document.querySelectorAll(".photo-download")

downloadBtn.forEach((download) => {
  download.addEventListener("click", ()=>{
    let downloadtag = download.parentElement
    let imageLink = download.parentElement.querySelector(".photo-full-screen").dataset.image

    const link = document.createElement('a');
    link.href = imageLink;  // Change to your file path
    link.download = 'pwimages-image';        // This will be the downloaded file name
    downloadtag.appendChild(link);
    link.click();
    downloadtag.removeChild(link);
    return
  })
})


