function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    fetch("/get_weather", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById("weather-result").innerHTML = `<p style="color: red;">${data.error}</p>`;
        } else {
            document.getElementById("weather-result").innerHTML = `
            <h3>City name:${data.city}</h3>
            <table>
                <thead>
                    <tr><th><p>Condition</p></th>
                    <th><p>Temperature</p></th>
                    <th><p>Humidity</p></th></tr>
                </thead>
                <tbody>
                    <tr><td><p>${data.description}</p></td>
                    <td><p>${data.temperature}°C</p></td>
                    <td><p>${data.humidity}%</p></td></tr>
                </tbody>
                
            </table>
            `;
        }
    })
    .catch(error => console.error("Error fetching weather:", error));
}
