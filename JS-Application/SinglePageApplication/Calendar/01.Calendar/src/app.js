const monthNames = {
    'Jan': 1,
    'Feb': 2,
    'Mar': 3,
    'Apr': 4,
    'May': 5,
    'Jun': 6,
    'Jul': 7,
    'Aug': 8,
    'Sep': 9,
    'Oct': 10,
    'Noe': 11,
    'Dec': 12,
}

const yearSelect = document.getElementById('years');

const years = [...document.querySelectorAll('.monthCalendar')].reduce((acc, c) => {
    acc[c.id] = c;
    return acc;
}, {});

const months = [...document.querySelectorAll('.daysCalendar')].reduce((acc, c) => {
    acc[c.id] = c;
    return acc;
}, {});

function displaSection(section) {
    document.body.innerHTML = '';
    document.body.appendChild(section);
}

displaSection(yearSelect)

yearSelect.addEventListener('click', (event) => {
    let target = event.target;
    if (event.target.classList.contains('date') || event.target.classList.contains('day')) {
        event.stopImmediatePropagation();
        const yearId = `year-${event.target.textContent.trim()}`
        displaSection(years[yearId])
    }
})

document.body.addEventListener('click', (event) => {
    if (event.target.tagName == 'CAPTION') {
        const sectionId = event.target.parentNode.parentNode.id;
        if (sectionId.includes('year-')) {
            displaSection(yearSelect);
        }else if(sectionId.includes('month-')){
            const yearId=`year-${sectionId.split('-')[1]}`;
            displaSection(years[yearId]);
        }
    } else if (event.target.tagName == 'TD' || event.target.tagName == 'DIV') {
        const monthName = event.target.textContent.trim();
        if (monthNames.hasOwnProperty(monthName)) {
            let parent = event.target.parentNode;
            while (parent.tagName != 'TABLE') {
                parent = parent.parentNode;
            }
            const year = parent.querySelector('caption').textContent.trim();
            const monthId=`month-${year}-${monthNames[monthName]}`;
            displaSection(months[monthId]);
        }

    }
})

//add event listeners for click event
//-find out if user has clicked on year, month or back button
//-execute logic for removing current view and display the required view

//main function
//-create associative arrays of all sections
//-hide or detach all sections
//-display year selection
//-add event listeners for click event
//--find out if user has clicked on year, month or back button
//--execute logic for removing current view and display the required view