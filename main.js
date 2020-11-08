    // const images = document.getElementsByClassName('.slide');
    var i = 0;
    var time = 5000;
    var images = [];
    // image List
    // images.array.forEach((slide) => {
    //     images[0] = 'img/dribble1.png';
    //     images[1] = 'img/assisstance.jpg';
    //     images[2] = 'img/medic.jpg';

    // });
    images[0] = 'img/dribble1.png';
    images[1] = 'img/assisstance.jpg';
    images[2] = 'img/medic.jpg';
    
    // Change Image
    function changeImg() {
        document.slide.src = images[i];

        if (i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }

        setTimeout("changeImg()", time)
    }

    window.onload = changeImg;
