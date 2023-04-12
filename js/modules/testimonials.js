let testimonials = [
    {
        image: 'avatar146.png',
        text: 'I like Furniking.com and as compared to other company it"s polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.',
        name: 'Angelina Joly',
        role: 'Co-founder',
    },

    {
        image: 'avatar396.png',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
        name: 'Joly Angelina ',
        role: 'Person',
    },

    {
        image: 'avatar572.png',
        text: 'survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        name: 'Angel Joy',
        role: 'found',
    },

    {
        image: 'avatar673.png',
        text: 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here',
        name: 'Joy Angel',
        role: 'Co-fo',
    },

    {
        image: 'avatar512.png',
        text: 'making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        name: 'Mad Max',
        role: 'founder',
    },
]

const testimonial = document.querySelector('.testimonials')


function addTestimonial({image, text, name, role}){
    testimonial.innerHTML = 
    `
        <h2>WHAT YOUR CUSTOMER SAYS</h2>
    
            <div class="testimonials__review">
                <img id="avatar" src="./img/blogs/${image}" alt="face">

                <p>
                    ${text}
                </p>
    
                <h3 class="text--m">${name}</h3>
                <p>${role}</p>
            </div>
        `
}

addTestimonial(testimonials[0])

let numberSlide = 0

export function nextSlide(){
    
    numberSlide = (numberSlide+1)%testimonials.length;
    addTestimonial(testimonials[numberSlide])
}





    