import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';


// Declare the videojs lib as external to the angular
declare  let videojs :  any ;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements  AfterViewInit {


  // Title of the component
  title =  'Player with Video.JS' ;
  // Instance of video.js.
  vidObj :  any ;
  // Poster to be used in video.js
  poster =  '//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png' ;

  //For sample HLS .m3u8 files, go to https://bitmovin.com/mpeg-dash-hls-examples-sample-streams/
  //To test if the given links are live, to to https://www.radiantmediaplayer.com/test-your-streaming-url.html
  // URL of the video to be played.
  // video =  '//vjs.zencdn.net/v/oceans.mp4' ;
  video =  'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8' ;
  // Access the html5 video element via viewchild.
  @ ViewChild ('myvid') vid :  ElementRef ;

  ngAfterViewInit () {
    const options = {
      controls: true ,
      autoplay: false ,
      preload: ' auto '
    };

    this.vidObj  =  new  videojs (document.getElementById('my-video'), {} , function() {
      videojs.log('Your player is ready!');
    });


  }

}
