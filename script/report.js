document.getElementById('incidentForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Incident reported successfully!');
    });
    
    document.querySelector('.btnCancel').addEventListener('click', function() {
      if(confirm('Are you sure you want to cancel? All unsaved changes will be lost.')) {
        window.location.href = '#';
      }
    });