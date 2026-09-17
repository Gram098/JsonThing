import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { prettyPrintJson } from 'pretty-print-json';

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
    if(typeof rock !== 'undefined' && rock !== null) {
      let newText = rock.value;
      newText = newText.replaceAll("\n", "");
      newText = newText.replaceAll('"', '\\"');
      newText = newText.replaceAll(' ', '');
      rock.value = newText;
    }
  }

  onBeauty() {
    let rock = document.getElementById("textt") as HTMLTextAreaElement;;
    if(typeof rock !== 'undefined' && rock !== null) {
      let newText = rock.value;
      newText = newText.replaceAll('\\"', '"');
      const parsedObj = JSON.parse(newText);
      //rock.value =
      //rock.innerHTML = prettyPrintJson.toHtml(JSON.stringify(parsedObj, null, 6));
      let elem = document.getElementById("idk") as HTMLElement;
      if(typeof elem !== 'undefined' && elem !== null) {
        elem.innerHTML = prettyPrintJson.toHtml(JSON.stringify(parsedObj, null, 6));
      }
    }
  }
}


