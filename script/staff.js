const staffData = [
            { name: "Dimitar Ivanov", team: "Bravo Team", status: "Available" },
            { name: "Gergana Pavlova", team: "Bravo Team", status: "In Operation" },
            { name: "Michael Ivanov", team: "Bravo Team", status: "In Operation" },
            { name: "Samuil Kodjabashev", team: "Charlie Team", status: "Available" },
            { name: "Roberta Ilieva", team: "Charlie Team", status: "In Operation" },
            { name: "Emiliq Staneva", team: "Charlie Team", status: "Available" },
            { name: "David Iismail", team: "Alpha Team", status: "Available" },
            { name: "Kaloyan Petrov", team: "Alpha Team", status: "Available" },
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