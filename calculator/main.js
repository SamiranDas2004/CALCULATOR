// let string= "";
// let buttons= document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         if(e.target.innerHTML=="="){
//             string=eval(string);
//             document.querySelector('input').value=string;
//         }
//         else{
//         // console.log(e.target)
//         string=string+e.target.innerHTML;
//         document.querySelector('input').value=string;
//     }
//     })
// })
document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const imageContainer = document.getElementById('imageContainer');

    uploadButton.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const image = document.createElement('img');
                image.src = e.target.result;
                imageContainer.appendChild(image);
            };
            reader.readAsDataURL(file);
        }
    });
});
