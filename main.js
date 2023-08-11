const hiddenElement = document.querySelectorAll('.hidden');
const link = document.querySelectorAll(".link");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            console.log(entry.target)
            entry.target.classList.add('show');
            
        } else {
            entry.target.classList.remove('show');
        };
    })
},{threshold: 0.6})

// console.log(hiddenElement);

hiddenElement.forEach(element => observer.observe(element));

