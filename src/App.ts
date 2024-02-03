import { Component } from "./components/component.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from "./components/page/page.js";

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "Image Title",
      "https://picsum.photos/600/300"
    );
    this.page.addChild(image);

    const note = new NoteComponent("Note title", "Note Body");
    this.page.addChild(note);

    const todo = new TodoComponent("Todo title", "Todo Item");
    this.page.addChild(todo);

    const video = new VideoComponent(
      "Video title",
      "https://www.youtube.com/watch?v=0Emq5FypiMM&t=2s"
    );
    this.page.addChild(video);
  }
}

new App(document.querySelector(".document")! as HTMLElement);
