function checkSite() {
  const url = document.getElementById("urlInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!url) {
    resultDiv.innerHTML = "⚠️ Please enter a URL!";
    resultDiv.className = "";
    return;
  }

  // Simulated phishing database
  const phishingSites = [
    "phishy-site.com",
    "fakebank-login.net",
    "malware-download.org",
    "free-gift-card.xyz"
  ];

  let isPhishing = phishingSites.some(site => url.includes(site));

  if (isPhishing) {
    resultDiv.innerHTML = "🚨 Warning! This site is Phishing!";
    resultDiv.className = "phishing";
  } else {
    resultDiv.innerHTML = "✅ This site looks Safe.";
    resultDiv.className = "safe";
  }
}
