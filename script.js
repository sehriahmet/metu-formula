function feature(e, featureClassName) {
    var element = document.getElementsByClassName('tab-item');
    for (var i = 0; i < element.length; i++) {
      var shouldBeActive = element[i].classList.contains(featureClassName);
      element[i].classList.toggle('active', shouldBeActive);
    }
}

function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    } else {
        console.error(`Modal with id ${modalId} not found`);
    }
}

window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

document.querySelectorAll('.close-modal').forEach(function(span) {
    span.onclick = function() {
        var modal = span.closest('.modal');
        modal.style.display = "none";
    }
});

document.querySelectorAll('.sub-team').forEach(function(figure) {
    figure.onclick = function() {
        var modalId = figure.getAttribute('onclick').match(/'([^']+)'/)[1];
        openModal(modalId);
    }
});