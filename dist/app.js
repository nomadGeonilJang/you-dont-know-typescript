import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("Image Title", 'https://picsum.photos/600/300');
        image.attachTo(appRoot, "beforeend");
        const note = new NoteComponent('Note TItl', 'Not body');
        note.attachTo(appRoot, "beforeend");
        const todo = new TodoComponent('todo', 'hellowlr');
        todo.attachTo(appRoot, "beforeend");
        const video = new VideoComponent('video', 'https://www.youtube.com/embed/c5uvAIxn07c');
        video.attachTo(appRoot, "beforeend");
    }
}
new App(document.querySelector(".document"));