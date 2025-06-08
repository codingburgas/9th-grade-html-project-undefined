const staffData = [
  { name: "Dimitar Ivanov",  team: "Team 1", status: "Avalible" },
  { name: "Gergana Pavlova",  team: "Team 1", status: "In Operation" },
  { name: "Michael Ivanov" ,  team: "Team 2", status: "In Operation" },
  { name: "Samuil Kodjabashev", team: "Team 2", status: "Avalible" },
  { name: "Roberta Ilieva",team: "Team 2", status: "In Operation" },
  { name: "Emiliq Staneva", team: "Team Red", status: "Avalible" },
  { name: "David Iismail", team: "Team Red", status: "Available" },
  { name: "Kaloyan Petrov", team: "Team Red", status: "Available" },
  { name: "Anna-Mariq", team: "Delta Team", status: "Available" },
  { name: "Patricia Andonova", team: "Delta Team", status: "On Standby" },
  { name: "Ivo Andonov", team: "Delta Team", status: "On Standby" },
  { name: "Linda Petrova", team: "Delta Team", status: "On Standby" },
];

const staffList = document.getElementById("staff-list");

staffData.forEach(staff => {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>
      <div>
        <strong>${staff.name}</strong><br/>
        <small style="color: #888;">Firefighter</small>
      </div>
    </td>
    <td>${staff.id}</td>
    <td>${staff.team}</td>
    <td>
      <span class="status-badge ${
        staff.status === "Available"
          ? "available"
          : staff.status === "On Standby"
          ? "standby"
          : "in-operation"
      }">${staff.status}</span>
    </td>
  `;

  staffList.appendChild(tr);
});
