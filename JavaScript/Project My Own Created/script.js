let userData = [];
const container = document.getElementById("response");
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myform");

  form.onsubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      dob: form.dob.value,
      phone: form.phone.value,
    };

    try {
      const res = await fetch("/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.text();
      alert("Success: " + result);
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  const read = document.getElementById("read");

  read.addEventListener("click", getData);
  async function getData() {
    const data = await fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data) => {
        console.log("User Array", data);
        userData = data;
        if (userData.length > 0) {
          container.innerHTML = `
              <h3>All the data</h3>
              ${userData
                .map(
                  (item) => `
                  <div style="border:1px solid #ccc; padding:10px; margin:10px;">
                    <p><strong>Name:</strong> ${item.name}</p>
                    <p><strong>Email:</strong> ${item.email}</p>
                    <p><strong>Password:</strong> ${item.password}</p>
                    <p><strong>DOB:</strong> ${item.dob}</p>
                    <p><strong>Phone:</strong> ${item.phone}</p>
                    <button data-id="${item._id}" class="remove-btn p-1 border cursor-pointer">Delete</button>
                  </div>
                `
                )
                .join("")}
            `;
        } else {
          container.innerHTML = "<p>No user data found</p>";
        }
      })
      .catch((error) => console.log("Error fetching users:", error));
  }

  //I added the delete functionlaity to whole div
  //container because it will cover all the btns
  //thats called event delegation
  //delete functionality
  container.addEventListener("click", async (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const userId = e.target.getAttribute("data-id");
      try {
        const res = await fetch(`http://localhost:3000/user/${userId}`, {
          method: "DELETE",
        });
        const result = await res.json();
        alert(result.message || "User deleted");
        getData();
      } catch (error) {
        console.error("Delete error:", error);
        alert("Failed to delete user");
      }
    }
  });
});
