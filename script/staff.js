const staffData = [
            { name: "Dimitar Ivanov", team: "Team 1", status: "Available" },
            { name: "Gergana Pavlova", team: "Team 1", status: "In Operation" },
            { name: "Michael Ivanov", team: "Team 2", status: "In Operation" },
            { name: "Samuil Kodjabashev", team: "Team 2", status: "Available" },
            { name: "Roberta Ilieva", team: "Team 2", status: "In Operation" },
            { name: "Emiliq Staneva", team: "Team Red", status: "Available" },
            { name: "David Iismail", team: "Team Red", status: "Available" },
            { name: "Kaloyan Petrov", team: "Team Red", status: "Available" },
            { name: "Anna-Mariq", team: "Delta Team", status: "Available" },
            { name: "Patricia Andonova", team: "Delta Team", status: "On Standby" },
            { name: "Ivo Andonov", team: "Delta Team", status: "On Standby" },
            { name: "Linda Petrova", team: "Delta Team", status: "On Standby" },
        ];

        document.addEventListener('DOMContentLoaded', function() {
            const staffList = document.getElementById("staffList");

            staffData.forEach(staff => {
                const tr = document.createElement("tr");

                tr.innerHTML = `
                    <td>
                        <div>
                            <strong>${staff.name}</strong><br/>
                            <small style="color: #888;">Firefighter</small>
                        </div>
                    </td>
                    <td></td>
                    <td>${staff.team}</td>
                    <td>
                        <span class="statusBadge ${
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
        });