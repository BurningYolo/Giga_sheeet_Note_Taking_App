function saveNote() {
    var subject = document.getElementById('subject').value;
    var date = document.getElementById('date').value;
    var notes = document.getElementById('notes').value;
    var lecture = document.getElementById('lecture').value;
    var topic = document.getElementById('topic').value;

    if (isValidInput(subject, date, notes, lecture, topic)) {
        alert('Note saved:\nSubject: ' + subject + '\nLecture: ' + lecture + '\nTopic: ' + topic + '\nDate: ' + date + '\nNotes: ' + notes);

        // creating raw text for notes file
        var rawnote = `
            Subject: ${subject}
            Lecture: ${lecture}
            Topic: ${topic}
            Date: ${date}
            Note: ${notes}
        `;

        saveNotetoFile(rawnote, subject, lecture, notes, date, topic);
    } else {
        alert("Fill in all fields");
    }
}

function isValidInput(...inputs) {
    return inputs.every(input => input.trim() !== '');
}

function saveNotetoFile(rawnote, subject, lecture, notes, date, topic) {
    var filename = `${subject}-${lecture}-${topic}`;
    var blob_rawnote = new Blob([rawnote], { type: 'text/plain' });
    var temp = document.createElement('a');
    temp.href = URL.createObjectURL(blob_rawnote);
    temp.download = filename;

    document.body.appendChild(temp);

    temp.click();

    document.body.removeChild(temp);
}
