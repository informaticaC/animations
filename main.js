const hiddenElement = document.querySelectorAll('.hidden');
const links = document.querySelectorAll(".link");


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            //console.log(entry.target.id)
            entry.target.classList.add('show');

            links.forEach((link) =>{
                const href = (link.getAttribute('href').split('').splice(1).join(''));
                if (href === entry.target.id) {
                    console.log(href);
                    link.classList.add('link--active');
                } else {
                    link.classList.remove('link--active');
                }

            } )
            
        } else {
            entry.target.classList.remove('show');
        };
    })
},{threshold: 0.5})

// console.log(hiddenElement);

hiddenElement.forEach(element => observer.observe(element));

