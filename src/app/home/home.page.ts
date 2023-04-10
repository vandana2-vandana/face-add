import { Component } from '@angular/core';
import { InViewportMetadata } from 'ng-in-viewport';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public videos = [ 
    { id: 'Family', src: 'assets/Gundellonaa.mp4', icon: 'mail' },
    { id: 'Friends', src: 'assets/Mastaaru.mp4', icon: 'paper-plane' },
    { id: 'Notes', src: 'assets/Gundellonaa.mp4', icon: 'heart' },
    { id: 'Work', src: 'assets/Mastaaru.mp4', icon: 'archive' },
    { id: 'Travel', src: 'assets/Gundellonaa.mp4', icon: 'trash' },
    { id: 'Reminders', src: 'assets/Mastaaru.mp4', icon: 'warning' }];
    nowPlaying:any=null;

  constructor() { }

  ngOnInit() {
    console.log(this.videos)
  }

  public changeVideoAudio(video:any) {
    alert("called")
    let id = video.id;
    let vid: any = document.getElementById('media-' + id);
    vid.muted = !vid.muted;
  }
  onIntersection($event:any) {
    const { [InViewportMetadata]: { entry }, target } = $event;
    const ratio = entry.intersectionRatio;
    const vid = target;
  
    ratio >= 0.65 ? vid.play() : vid.pause();
  }
  elementInViewport2(el: { getBoundingClientRect: () => any; }) {
    let rect = el.getBoundingClientRect();
 
    return (rect.top>=0 &&
     rect.left>=0 && 
     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
     rect.right <= (window.innerHeight || document.documentElement.clientHeight)
 
     )
    
   }
   didScroll(event: any){
     console.log(event,"didScroll")
     if(this.nowPlaying && this.elementInViewport2(this.nowPlaying)) return
     else if(this.nowPlaying && !this.elementInViewport2(this.nowPlaying)){
     this.nowPlaying.pause();
     this.nowPlaying = null;
     }
    //  this.videos.forEach(vedio=>{
    //    console.log(vedio,"vedio")
    //    if(this.nowPlaying)
    //    return
    //    const nativeElemnt = vedio;
    //    const view = this.elementInViewport2(nativeElemnt);
    //    if(view){
    //      this.nowPlaying = nativeElemnt;
    //      this.nowPlaying.play();
    //      // this.nowPlaying.play();
    //    }
    //  })
   }

}
