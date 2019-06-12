import { Component, OnInit } from "@angular/core";
import { Video } from "../../types/types";
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs';
import {VideoDataService} from '../../video-data.service';

@Component({
  selector: "app-video-dashboard",
  templateUrl: "./video-dashboard.component.html",
  styleUrls: ["./video-dashboard.component.css"]
})
export class VideoDashboardComponent implements OnInit {
  videoListData: Observable<Video[]>;
  selectedVideo: Video;

  constructor(videoDataService: VideoDataService) {
    this.videoListData = videoDataService.getVideos();
  }

  ngOnInit() {}

  onVideoSelected(video: Video) {
    this.selectedVideo = video;
  }
}
