$(document).ready(function () {
    // listen for save button clicks
    $('.saveBtn').on('click',
        function () {
        // get nearby values
        var eventText = $(this).siblings('.description').val();
        var eventTime = $(this).parent().attr('id');
        // save in localStorage
        localStorage.setItem(eventTime, eventText);
        // Show notification that item was saved to localStorage by adding class 'show'
        $('#notify').toggleClass('hidden');
        // Timeout to remove 'show' class after 5 seconds
        setTimeout(function () {
            $('#notify').toggleClass('hidden');
        }, 5000);
    });

    function hourUpdater() {
        // get current number of hours (preferably with moment.js)
        var currentHour = moment().hour();
        // loop over time blocks
        $('.time-block').each(function () {
            var blockHour= parseInt($(this).attr('id').split('hour-')[1]);
            if (blockHour === currentHour) {
                $(this).removeClass('past');
                $(this).removeClass('future');
                $(this).addClass('present');
            }
            else if (blockHour < currentHour) {
                $(this).removeClass('present');
                $(this).removeClass('future');
                $(this).addClass('past');
            }
            else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        })
        // loop over time blocks ---> https://api.jquery.com/each/
        // inside this loop, // check if we've moved past this time. If we have, make the row grey. If it's future, make it green. if it's past, make it red. Using the past, present, and future classes in css file

        // check if we've moved past this time
    }

    hourUpdater();

    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);

    // load any saved data from localStorage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));

    $('#hour-10 .description').val(localStorage.getItem('hour-10'));

    $('#hour-11 .description').val(localStorage.getItem('hour-11'));

    $('#hour-12 .description').val(localStorage.getItem('hour-12'));

    $('#hour-13 .description').val(localStorage.getItem('hour-13'));

    $('#hour-14 .description').val(localStorage.getItem('hour-14'));

    $('#hour-15 .description').val(localStorage.getItem('hour-15'));

    $('#hour-16 .description').val(localStorage.getItem('hour-16'));

    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
    ///need to repeat line 21 for all the other hours

    //'clear schedule' button
    $('#clear').on('click',
        function () {
            localStorage.clear();
            $('textarea').val('')
        })

    // display current day on page
    function showDate() {
        var date = moment().format('LL')
        console.log(date);
        $('#currentDay').text(date);
    }

    showDate();
});