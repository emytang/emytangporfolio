
$(document).ready(function() {
  $fixContainer = $('.fix-container');
  let fixContent = [];

  $('[data-img]').each(function() {
    let img = $(this).attr('data-img');
    $(this).css('background-image', 'url("' + img + '")');
  });
  
  $('.fix-section').each(function(i) {
    
    let $section = $(this);
    let $save = $('<div></div>');
    $save.append($section.clone().children());
    fixContent.push($save);
    // Set up scroll event
    let waypoint = new Waypoint({
      element: $section[0],
      handler: function(direction) {
        let $prevSave = fixContent[i-1];
        if (direction == "down") {
          $fixContainer.html("");
          $fixContainer.append($save);
          $section.addClass('fixed');
        } else if (direction == "up") {
          $fixContainer.html("");
          $fixContainer.append($prevSave);
          $section.removeClass('fixed');
        }
      }
    });
  });
});



function unhideLightbox(lightboxID) {
  document.getElementById('li').classList.remove('hidden');
  document.getElementById(lightboxID).classList.remove('hidden');
}

function unhideLightbox1() {
  unhideLightbox("canyon")
}

document.getElementById("ca").onclick = unhideLightbox1; 



function unhideLightbox2() {
  unhideLightbox("desert");
}

document.getElementById("de").onclick = unhideLightbox2; 


function unhideLightbox3() {
  unhideLightbox("ocean");
}

document.getElementById("oc").onclick = unhideLightbox3;

function unhideLightbox4() {
  unhideLightbox("ice");
}

document.getElementById("ic").onclick = unhideLightbox4;

function unhideLightbox5() {
  unhideLightbox("grassland");
}

document.getElementById("gr").onclick = unhideLightbox5;



function closeLightbox(lightboxID) {
  document.getElementById('li').classList.add('hidden');

  document.getElementById(lightboxID).classList.add('hidden');
}


// This function class closeLightbox() for every .lightbox div - feel free to read it, but you do not have to understand it completely!
function closeAllLightboxes() {
  // get every .lightbox div, getElementsByClassName gives us an array 
  var lightboxElements = document.getElementsByClassName('lightbox');

  // sneak preview of Javascript loops, which will go through every element in an array of elements
  for (var i = 0; i < lightboxElements.length; i++) {
    
    var id = lightboxElements[i].id;
    
    closeLightbox(id);
  }
}


document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;


