function checkPhishing() {
  const url = document.getElementById("urlInput").value;
  let result = "Safe site!";
  if (url.includes("phish") || url.includes("fake")) {
    result = "⚠️ Warning: Potential phishing site/email!";
  }
  document.getElementById("phishingResult").innerText = result;
}

function analyzeLogs() {
  const logs = document.getElementById("logInput").value;
  let result = "No suspicious activity detected.";
  if (logs.includes("failed login")) {
    result = "⚠️ Suspicious login attempts detected!";
  }
  document.getElementById("logResult").innerText = result;
}

function detectAnomaly() {
  const data = document.getElementById("networkInput").value;
  let result = "Network looks normal.";
  if (data.includes("malware") || data.includes("attack")) {
    result = "⚠️ Anomaly detected in network traffic!";
  }
  document.getElementById("networkResult").innerText = result;
}
