import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('jsontransfer');

  onCompress() {
    let rock = document.getElementById("textt") as HTMLTextAreaElement;;
    if (typeof rock !== 'undefined' && rock !== null) {
      let newText = rock.value;
      newText = newText.replaceAll("\n", "");
      console.log(newText);
      newText = newText.replaceAll('"', '\\"');
      console.log(newText);
      newText = newText.replaceAll(' ', '');
      console.log(newText);
      rock.value = newText;
    }
  }

  onBeauty() {
    let rock = document.getElementById("textt") as HTMLTextAreaElement;;
    if (typeof rock !== 'undefined' && rock !== null) {
      let newText = rock.value;
      newText = newText.replaceAll('\"', '"');
      const parsedObj = JSON.parse(newText);
      rock.value = (JSON.stringify(parsedObj, null, 6));
      }
    }
  }

