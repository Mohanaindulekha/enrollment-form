const enrollButton = document.getElementById("enrollButton");
const clearButton = document.getElementById("clearButton");
const enrollmentForm = document.getElementById("enrollmentForm");
const studentList = document.getElementById("studentList");

enrollButton.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const website = document.getElementById("website").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const skills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(skill => skill.value);
  const image = document.getElementById("image").value;

  if (name && email && gender && skills.length > 0) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <img class="student-image" src="${image}" alt="${name}">
      <div>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website || "N/A"}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Skills:</strong> ${skills.join(", ")}</p>
      </div>
    `;
    studentList.appendChild(listItem);
    enrollmentForm.reset();
  } else {
    alert("Please fill in all required fields.");
  }
});

clearButton.addEventListener("click", () => {
  enrollmentForm.reset();
});

