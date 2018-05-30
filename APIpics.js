var imageDupe=document.querySelector('.framedImage');
var imageDupe2=document.querySelector('.phoneImage')
fetch('https://source.unsplash.com/random')
    .then(function(response){
        if(!response.ok){
            return new Error (response);
        }
        return response.blob()
    })
    .then(function(PhotoBlob){
    
        var objectURL = URL.createObjectURL(PhotoBlob);
        imageDupe.src = objectURL;
        imageDupe2.src = objectURL;
    })
    .catch(function(err){
        console.log(err);
    }); 


