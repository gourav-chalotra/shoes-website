var visibleSport = 0;
        let shoes_images = document.getElementsByClassName("img_shoes");
        shoes_images[visibleSport].style.visibility = "visible"

        document.getElementById("left_arrow").addEventListener("click",()=>{
            shoes_images[visibleSport].style.visibility = "hidden"
            visibleSport--;
            if(visibleSport < 0)
            {
                visibleSport = shoes_images.length-1;
            }
            visible();
            console.log(visibleSport);
        })
        document.getElementById("right_arrow").addEventListener("click",()=>{
            shoes_images[visibleSport].style.visibility = "hidden"
            visibleSport++;
            if(visibleSport >= shoes_images.length)
            {
                visibleSport = 0;
            }
            visible();
            console.log(visibleSport);
        })
        function visible()
        {
            shoes_images[visibleSport];
            shoes_images[visibleSport].style.visibility = "visible"
            
            
        };
        document.addEventListener("ArrowLeft",()=>{
            alert("working");
        })