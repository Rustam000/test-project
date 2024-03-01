async function fetchUsers() {
    const container = document.getElementById("user-container");
    container.innerHTML = "Loading...";
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      renderUsers(users);
    } catch (error) {
      container.innerHTML = "Error fetching data. Please try again.";
    }
  }
  
  function renderUsers(users) {
    const container = document.getElementById("user-container");
    container.innerHTML = "";
  
    users.forEach(user => {
      const card = document.createElement("div");
      card.className = "user-card";
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
      `;
      container.appendChild(card);
    });
  }
  
  
  fetchUsers();
  