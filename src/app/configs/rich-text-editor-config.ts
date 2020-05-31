import { AngularEditorConfig } from '@kolkov/angular-editor';

export class RichTextEditorConfig {
  public static readonly editor: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '5rem',
    placeholder: 'Your content here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Roboto',
    sanitize: true,
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'roboto', name: 'Roboto' },
    ],
    toolbarHiddenButtons: [['insertVideo']],
  };
}
