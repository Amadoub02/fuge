import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  userString: string = 'reckless: ';
  consoleContent: string = '';
  editorContent: string = '';

  @ViewChild('editor') editor!: ElementRef;

  onKeydown(event:Event):void {
    if(event instanceof KeyboardEvent) {
      if(event.key === 'Enter'){
        console.log('Keydown event triggered');
        const commandLineValue = (event.target as HTMLInputElement).value;
        this.appendContent(this.userString + commandLineValue);

        (event.target as HTMLInputElement).value = '';
      }
    }
  }

  private appendContent(content: string): void {
    this.consoleContent += content + '<br>';
  }

  onEditorInput() {
    console.log('Editor input event triggered');
  }

  runCode(): void{
    console.log(this.editor);
    const editorContent = this.editor.nativeElement.value;

    if(editorContent.trim() !== ''){
      this.appendContent(this.userString + editorContent);
      this.editor.nativeElement.value = '';
    }
  }
}
