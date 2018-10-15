import { Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
$(document).ready(function() {
  $(window).on('scroll', function() {
  
      var docHeight = $(document).height(),
          winHeight = $(window).height();
  
      var viewport = docHeight - winHeight,
          positionY = $(window).scrollTop();
  
      var indicator = ( positionY / (viewport)) * 100;
  
      $('.scroll-bar').css('width', indicator + '%');
  
  });
  });