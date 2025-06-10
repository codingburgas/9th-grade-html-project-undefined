const templates = {
            training: {
                subject: "Upcoming Fire Safety Training Session",
                content: "Dear Team,\n\nThis is a reminder about our scheduled fire safety training session on [DATE] at [TIME] in [LOCATION].\n\nAttendance is mandatory for all staff members. Please bring your safety gear and training manuals.\n\nIf you have any questions, contact your supervisor.\n\nBest regards,\nFire Safety Team"
            },
            maintenance: {
                subject: "Vehicle Maintenance Schedule Update",
                content: "Attention All Teams,\n\nThe following vehicles are scheduled for maintenance:\n\n- [VEHICLE1]: [DATE]\n- [VEHICLE2]: [DATE]\n\nPlease plan your operations accordingly. Vehicles will be unavailable during their scheduled maintenance periods.\n\nContact the maintenance team for any clarifications.\n\nSafety First,\nMaintenance Department"
            },
            emergency: {
                subject: "URGENT: Emergency Protocol Activation",
                content: "EMERGENCY ALERT\n\nAll personnel must follow emergency protocols immediately.\n\nSituation: [DESCRIBE SITUATION]\n\nActions required:\n1. [ACTION1]\n2. [ACTION2]\n3. [ACTION3]\n\nDo not disregard this message. Follow your training and proceed to designated safe zones.\n\nStay alert for further instructions.\n\nEmergency Command"
            }
        };

        function loadTemplate() {
            const templateSelect = document.getElementById('templateSelect');
            const selectedTemplate = templateSelect.value;
            
            if (selectedTemplate && templates[selectedTemplate]) {
                document.getElementById('messageSubject').value = templates[selectedTemplate].subject;
                document.getElementById('messageContent').value = templates[selectedTemplate].content;
            }
        }

        function loadTemplateFromItem(templateId) {
            document.getElementById('templateSelect').value = templateId;
            
            if (templates[templateId]) {
                document.getElementById('messageSubject').value = templates[templateId].subject;
                document.getElementById('messageContent').value = templates[templateId].content;
            }
        }

        function clearTemplate() {
            document.getElementById('templateSelect').value = '';
            document.getElementById('messageSubject').value = '';
            document.getElementById('messageContent').value = '';
        }

        document.querySelectorAll('.templateItem').forEach(item => {
            item.addEventListener('click', function() {
                // Highlight selected template
                document.querySelectorAll('.templateItem').forEach(i => {
                    i.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                });
                this.style.backgroundColor = 'rgba(59, 130, 246, 0.2)';
            });
        });