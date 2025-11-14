$(document).ready(function() {
    // Function to handle the click event on the "Surgery" button
    $('#surgery').click(function() {
        // Show the surgery modal
        $('#surgeryModal').modal('show');
    });

    // Function to handle the click event on the "Save" button in the surgery modal
    $('#saveSurgery').click(function() {
        // Get the selected surgery type and date
        var surgeryType = $('#surgeryType').val();
        var surgeryDate = $('#surgeryDate').val();

        // Validate that both fields are filled
        if (surgeryType && surgeryDate) {
            // Close the modal
            $('#surgeryModal').modal('hide');

            // Display a success message
            alert('Surgery scheduled: ' + surgeryType + ' on ' + surgeryDate);
        } else {
            alert('Please fill in all fields.');
        }
    });
    // Function to handle the click event on the "Cancel" button in the surgery modal
    $('#cancelSurgery').click(function() {
        // Close the modal
        $('#surgeryModal').modal('hide');
    });
    // Function to handle the click event on the "Delete" button in the surgery modal
    $('#deleteSurgery').click(function() {
        // Close the modal
        $('#surgeryModal').modal('hide');

        // Display a deletion message
        alert('Surgery deleted.');
    });
    // Function to handle the click event on the "Edit" button in the surgery modal
    $('#editSurgery').click(function() {
        // Close the modal
        $('#surgeryModal').modal('hide');

        // Display an edit message
        alert('Surgery details edited.');
    });
    // Function to handle the click event on the "View" button in the surgery modal
    $('#viewSurgery').click(function() {
        // Close the modal
        $('#surgeryModal').modal('hide');

        // Display a view message
        alert('Viewing surgery details.');
    });
    // Function to handle the click event on the "Print" button in the surgery modal
    $('#printSurgery').click(function() {
        // Close the modal
        $('#surgeryModal').modal('hide');

        // Display a print message
        alert('Printing surgery details.');
    });
    // Function to handle the click event on the "Export" button in the surgery modal
    $('#exportSurgery').click(function() {
        // Close the modal
        $('#surgeryModal').modal('hide');

        // Display an export message
        alert('Exporting surgery details.');
    });
    // Function to handle the click event on the "Import" button in the surgery modal
    return
});