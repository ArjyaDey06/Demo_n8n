async function getWeather() {
  const city = document.getElementById("city").value;
  const output = document.getElementById("output");

  if (!city) {
    output.innerText = "Enter a city";
    return;
  }

  output.innerText = "Loading...";

  try {
    const res = await fetch(
      `http://localhost:5678/webhook-test/weather?city=${encodeURIComponent(city)}`
    );
    const data = await res.json();

    if (data.error) {
      output.innerText = data.error;
    } else {
      output.innerHTML = `
        <strong>${data.city}</strong><br>
        🌡 ${data.temperature} °C<br>
        💨 ${data.windspeed} km/h
      `;
    }
  } catch (err) {
    output.innerText = "Error fetching weather";
  }
}
