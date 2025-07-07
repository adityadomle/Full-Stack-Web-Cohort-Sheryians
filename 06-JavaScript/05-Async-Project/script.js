async function loadDashboard() {
  const username = document.getElementById("username").value.trim();
  const statsDiv = document.getElementById("stats");
  const profileDiv = document.getElementById("profile");

  if (!username) {
    alert("Please enter a GitHub username");
    return;
  }

  // GitHub API - fetch basic profile info
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const user = await res.json();

    if (user.message === "Not Found") {
      profileDiv.innerHTML = "<p class='text-red-400'>User not found</p>";
      statsDiv.innerHTML = "";
      return;
    }

    // Render Profile Info
    profileDiv.innerHTML = `
      <img src="${user.avatar_url}" class="w-24 h-24 rounded-full mx-auto border border-white" />
      <h2 class="text-xl font-semibold mt-2">${user.name || user.login}</h2>
      <p>${user.bio || "No bio available"}</p>
      <p><strong>Repos:</strong> ${user.public_repos}</p>
      <p><strong>Followers:</strong> ${user.followers}</p>
      <p><strong>Following:</strong> ${user.following}</p>
    `;

    // Render Stats Images
    statsDiv.innerHTML = `
      <img class="w-full rounded-lg shadow-lg" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=vue" />
      <img class="w-full rounded-lg shadow-lg" src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${username}&theme=vue" />
      <img class="w-full rounded-lg shadow-lg" src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${username}&theme=vue" />
      <img class="w-full rounded-lg shadow-lg" src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${username}&theme=vue" />
      <img class="w-full rounded-lg shadow-lg" src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=${username}&theme=vue" />
    `;

  } catch (err) {
    console.error("Error fetching data", err);
    profileDiv.innerHTML = "<p class='text-red-400'>Something went wrong</p>";
    statsDiv.innerHTML = "";
  }
}
