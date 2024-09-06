// Helper function to animate the numbers counting up
function animateValue(id, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      document.getElementById(id).innerText = (progress * (end - start) + start).toFixed(2);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  // Total values to animate
  const totalUSDT = 635.39;
  const totalINR = 53595.28;
  const totalProfit = 995.33;
  const totalLoss = 570.22;
  const totalTax = 298.59;
  
  // Animate the values with duration of 2 seconds (2000 ms)
  animateValue("total-usdt", 0, totalUSDT, 2000);
  animateValue("total-inr", 0, totalINR, 2000);
  animateValue("total-profit", 0, totalProfit, 2000);
  animateValue("total-loss", 0, totalLoss, 2000);
  animateValue("total-tax", 0, totalTax, 2000);
  