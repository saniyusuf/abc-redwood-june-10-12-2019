import { Component, OnInit } from "@angular/core";
import { Video } from "../../types/types";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-video-dashboard",
  templateUrl: "./video-dashboard.component.html",
  styleUrls: ["./video-dashboard.component.css"]
})
export class VideoDashboardComponent implements OnInit {
  videoListData: Video[];
  selectedVideo: Video;

  constructor(httpClient: HttpClient) {
    httpClient
      .get<Video[]>("https://api.angularbootcamp.com/videos")
      .subscribe(videoData => (this.videoListData = videoData));
  }

  ngOnInit() {}

  onVideoSelected(video: Video) {
    this.selectedVideo = video;
  }
}
