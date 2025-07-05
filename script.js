document.getElementById('footprintForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const drive = parseInt(this.drive.value);
    const flights = parseInt(this.flights.value);
    const recycle = parseInt(this.recycle.value);
    const renewable = parseInt(this.renewable.value);
    const clothes = parseInt(this.clothes.value);
    const compost = parseInt(this.compost.value);
    const commute = parseInt(this.commute.value);
    const shower = parseInt(this.shower.value);

    const total = drive + flights + (2*recycle) + renewable + clothes + compost + commute + shower;

    const carbonEstimate = total * 1000;

    let message = '';

    if(total <= 7){
        message = "🌟 Amazing! Your Carbon footprint is very low. Keep leading you life this way!";
    }
    else if(total <= 12){
         message = `👍 Good Job! You can still improve by adjusting a few habits by:
            <ul>    
                   <li> ✅ Take a shorter shower to save water</li>
                   <li> ✅ Walk or cycle whenever</li>
                   <li> ✅ Try recycling as much as possible</li>
                   <li>For more information Click Here 👉<a href="https://itsnature.org/what-on-earth/10-ways-to-conserve-the-environment/">Ways to Conserve the Environment</a> </li>
            <ul>`;
    }
    else{
         message = `⚠️ Your footprint is very high. Consider taking these actions:
          <ul>
                <li>🚫 Cut back on car use and air travel.</li>
                <li>🌱 Take shorter showers to save energy and water.</li>
                <li>♻️ Always recycle and compost.</li>
                <li>⚡ Consider switching to renewable home energy.</li>
                <li>For more information Click Here 👉<a href="https://www.dekoder.com/article/100-ways-to-protect-the-environment">Ways to Conserve the Environment</a> </li>
          </ul>`;
    }

    document.getElementById('result').innerHTML=`
    <h3> Your Carbon Footprint Score: ${total}</h3>
    <p> 👣 Estimated Carbon Footprint: <strong>${carbonEstimate} kg CO2/year</strong></p>
    <p>${message}</p>
    `; 

    const resultBox = document.getElementById('result');
resultBox.classList.add('show');
resultBox.scrollIntoView({
behavior: 'smooth'
});
});