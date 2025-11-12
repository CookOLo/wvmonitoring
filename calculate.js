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