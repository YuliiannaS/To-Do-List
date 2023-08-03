$(document).ready(function () {
    // Function to add a new item to the to-do list
    function newItem() {
        var item = $('#input').val();
        if (item === '') {
            return false;
        }

        $('#list').append('<li><span class="item-text">' + item + '</span><span class="delete">X</span></li>');
        $('#input').val('');

        updateCount();
    }

    // Call newItem() when the 'Add' button is clicked
    $('#button').click(function () {
        newItem();
    });

    // Call newItem() when the Enter key is pressed in the input field
    $('#input').keypress(function (event) {
        if (event.which == 13) {
            newItem();
        }
    });

    // Function to mark an item as completed
    $(document).on('dblclick', '.item-text', function () {
        $(this).toggleClass('completed');
        updateCount();
    });

    // Function to delete an item from the list
    $(document).on('click', '.delete', function () {
        $(this).parent().remove();
        updateCount();
    });

    // Make the list items draggable to allow reordering
    $('#list').sortable();

    // Function to update the task count
    function updateCount() {
        var totalCount = $('#list li').length;
        var completedCount = $('#list li.completed').length;
        var remainingCount = totalCount - completedCount;

        $('#count').text('Total: ' + totalCount + ' Completed: ' + completedCount + ' Remaining: ' + remainingCount);
    }
});
