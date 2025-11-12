window.onload = generateMoistureData; 

function generateMoistureData() { 
      // Simulated sensor readings (replace with real sensor input later) 
      const moisture = Math.floor(Math.random() * 101); // 0–100% 
      const dryness = 100 - moisture; 

      let moistureStatus = ""; 
      let moistureRecommend = ""; 
      let drynessRecommend = ""; 

      // Determine soil saturation level 
      if (moisture > 85) { 
        moistureStatus = `<span class="status">High Moisture</span> - Soil is saturated.`; 
        moistureRecommend = `<span class="recommend">Recommendation: Stop irrigation system.</span>`; 
      } else if (moisture >= 50) { 
        moistureStatus = `<span class="status">Medium Moisture</span> - Soil moisture is balanced.`; 
        moistureRecommend = `<span class="recommend">Recommendation: Maintain current irrigation schedule.</span>`; 
      } else { 
        moistureStatus = `<span class="status">Low Moisture</span> - Soil is dry.`; 
        moistureRecommend = `<span class="recommend">Recommendation: Run irrigation until it reaches 85%.</span>`; 
      } 

      // Determine dryness recommendation 
      if (dryness > 50) { 
        drynessRecommend = `<span class="recommend">Soil is quite dry — consider irrigation.</span>`; 
      } else { 
        drynessRecommend = `<span class="recommend">Soil dryness is within acceptable range.</span>`; 
      } 

 

      const dataHTML = ` 
        <p><strong>Current Moisture Level:</strong> ${moisture}%</p> 
        <p>${moistureStatus}</p> 
        <p>${moistureRecommend}</p> 
        <div class="divider"></div> 
        <p><strong>Dryness Estimate:</strong> ${dryness}%</p> 
        <p>${drynessRecommend}</p> 
        <div class="divider"></div> 
        <p><em>Data generated at:</em> ${new Date().toLocaleString()}</p> 
      `; 
      document.getElementById("moistureData").innerHTML = dataHTML; 
} 

let light = true;

function backgroundColorChange() {
  let style = document.createElement('style');

  if(light == true) {
    // style change
    style.innerHTML = `
    body { 
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; 
      background-color: #131313; 
      color: #F5F5F5; 
      padding: 20px; 
    }
    .container { 
      max-width: 600px; 
      margin: 0 auto; 
      background: #2d2b2b; 
      border-radius: 12px; 
      box-shadow: 0 2px 12px #8C1D40; 
      padding: 20px; 
      border-top: 6px solid #8C1D40; /* Maroon accent bar */ 
    }  
    .darkButton {
      background-color: #F5F5F5; 
      color: black; 
      border: none; 
      padding: 15px 55px;
      border-radius: 6px; 
      cursor: pointer; 
      font-size: 18pt; 
      display: block; 
      margin: 0px 10px 0px auto;
      transition: background-color 0.3s ease; 
      touch-action: manipulation;
    }
    .recommend { 
      color: #d33164; 
      font-style: italic; 
      padding: 4px 6px; 
      border-radius: 4px; 
      display: inline-block; 
      margin-top: 4px; 
    }
    .status { 
      font-weight: bold; 
      color: #d33164;
    } 
`;
    // button change
    const dataHTML = ` 
    ☼ 
    `; 
    document.getElementById("changeColor").innerHTML = dataHTML; 

    light = false;
  } else {
    // style change
    style.innerHTML = `
    body { 
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; 
      background-color: #F5F5F5; /* ASU light neutral background */ 
      color: #000; 
      padding: 20px; 
    } 
    .container { 
      max-width: 600px; 
      margin: 0 auto; 
      background: #fff; 
      border-radius: 12px; 
      box-shadow: 0 2px 12px rgba(0,0,0,0.15); 
      padding: 20px; 
      border-top: 6px solid #8C1D40; /* Maroon accent bar */ 
    } 
    .darkButton {
      background-color: #000000; 
      color: white; 
      border: none; 
      padding: 15px 55px;
      border-radius: 6px; 
      cursor: pointer; 
      font-size: 18pt; 
      display: block; 
      margin: 0px 10px 0px auto;
      transition: background-color 0.3s ease; 
      touch-action: manipulation;
    }
    .recommend { 
      color: #8C1D40; 
      font-style: italic; 
      padding: 4px 6px; 
      border-radius: 4px; 
      display: inline-block; 
      margin-top: 4px; 
    } 
    .status { 
      font-weight: bold; 
      color: #8C1D40; /* Maroon bold */
    } 
`;

    // button change
    const dataHTML = ` 
    ☾
    `; 
    document.getElementById("changeColor").innerHTML = dataHTML; 

    light = true;
  }
  
  document.head.appendChild(style);

}