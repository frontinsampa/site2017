'use strict';

var speakersData = [{
  name: 'Jessica Hische',
  role: 'Typographer & Illustrator',
  twitter: 'jscahische',
  twitterLink: '/jscahische'
}, {
  name: 'Jessica Hische',
  role: 'Typographer & Illustrator',
  twitter: 'jscahische',
  twitterLink: '/jscahische'
}, {
  name: 'Jessica Hische',
  role: 'Typographer & Illustrator',
  twitter: 'jscahische',
  twitterLink: '/jscahische'
}, {
  name: 'Jessica Hische',
  role: 'Typographer & Illustrator',
  twitter: 'jscahische',
  twitterLink: '/jscahische'
}, {
  name: 'Jessica Hische',
  role: 'Typographer & Illustrator',
  twitter: 'jscahische',
  twitterLink: '/jscahische'
}, {
  name: 'Jessica Hische',
  role: 'Typographer & Illustrator',
  twitter: 'jscahische',
  twitterLink: '/jscahische'
}, {
  name: 'Jessica Hische',
  role: 'Typographer & Illustrator',
  twitter: 'jscahische',
  twitterLink: '/jscahische'
}, {
  name: 'Jessica Hische',
  role: 'Typographer & Illustrator',
  twitter: 'jscahische',
  twitterLink: '/jscahische'
}];

var timeline = [{
  hour: '08:00 - 09:00',
  title: 'Credenciamento',
  description: 'Não esqueça seu RG',
  link: 'http://www.teste.com'
}, {
  hour: '08:00 - 09:00',
  title: 'Credenciamento',
  description: 'Não esqueça seu RG',
  link: 'http://www.teste.com'
}, {
  hour: '08:00 - 09:00',
  title: 'Credenciamento',
  description: 'Não esqueça seu RG',
  link: 'http://www.teste.com'
}, {
  hour: '08:00 - 09:00',
  title: 'Credenciamento',
  description: 'Não esqueça seu RG',
  link: 'http://www.teste.com'
}, {
  hour: '08:00 - 09:00',
  title: 'Credenciamento',
  description: 'Não esqueça seu RG',
  link: 'http://www.teste.com'
}, {
  hour: '08:00 - 09:00',
  title: 'Credenciamento',
  description: 'Não esqueça seu RG',
  link: 'http://www.teste.com'
}, {
  hour: '08:00 - 09:00',
  title: 'Credenciamento',
  description: 'Não esqueça seu RG',
  link: 'http://www.teste.com'
}, {
  hour: '08:00 - 09:00',
  title: 'Credenciamento',
  description: 'Não esqueça seu RG',
  link: 'http://www.teste.com'
}];

var timelineTemplate = function(timeline) {
  return timeline.map(function (item, index) {
    return '\n<div class="timeline-block"> \n<div class="timeline-circle"></div> \n<div class="timeline-content"> \n<p class="timeline-date"></p>\n            <h2>' + item.title + '</h2>\n            <p>' + item.description + '</p>\n            <a href="#" class="more-details">+ detalhes</a>\n          </div>\n        </div>\n      ';
  }).join('');
};

window.onload = function () {
  var timelineContainer = document.querySelector('.schedule-timeline')
  timelineContainer.innerHTML = timelineTemplate(timeline);
};
