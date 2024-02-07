document.addEventListener('DOMContentLoaded', function () {
    const freelancersList = document.querySelector('#freelancers-list');
    const averagePriceElement = document.querySelector('#average-price');

    const freelancers = [
        { name: "Alice", occupation: "Writer", startingPrice: 30 },
        { name: "Bob", occupation: "Teacher", startingPrice: 50 },
        { name: "Carol", occupation: "Programer", startingPrice: 70 },
    ];

    function updateAveragePrice() {
        const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
        const averagePrice = freelancers.length > 0 ? totalPrices / freelancers.length : 0;
        averagePriceElement.textContent = `Average starting price: $${averagePrice.toFixed(3)}`;
    }

    function renderFreelancers() {
        freelancersList.innerHTML = '';

        freelancers.forEach(freelancer => {
            const freelancerElement = document.createElement('div');
            freelancerElement.classList.add('freelancer');
            freelancerElement.textContent = `${freelancer.name}, ${freelancer.occupation}, Starting Price: $${freelancer.startingPrice}`;

            freelancersList.appendChild(freelancerElement);
        });
    }

    function addRandomFreelancer() {
        const names = ["Jack", "David", "Eva", "Frank", "Grace"];
        const occupations = ["Painter", "Designer", "Consultant", "Artist", "Photographer"];

        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
        const randomStartingPrice = Math.floor(Math.random() * 100) + 1;

        const newFreelancer = { name: randomName, occupation: randomOccupation, startingPrice: randomStartingPrice };
        freelancers.push(newFreelancer);

        renderFreelancers();
        updateAveragePrice();
    }

    
    renderFreelancers();
    updateAveragePrice();

    // Set interval to add a new freelancer and update the average every 5 seconds
    setInterval(addRandomFreelancer, 5000);
});

