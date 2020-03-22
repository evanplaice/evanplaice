import 'https://cdn.jsdelivr.net/npm/@vanillawc/wc-markdown@1.5.2/index.js';

const starterSource = `# This is a h1 header

## This is a h2 Header

[This is a link](#)

\`\`\`this is inline code\`\`\`

\`\`\`javascript
// this is a code block
\`\`\`

- these
- are
- list
- items

> this is a blockquote

![this is an image](http://gnarware.com/shared/3-Build-A-Product-Landing-Page/shmoo-icon[32x32].png)

**this is bold text**`;

const Editor = ({ onEdit }) => {
  const [source, setSource] = React.useState(starterSource);
  React.useEffect(() => {
    onEdit(source);
  });
  
  return (
    <div id="left">
      <label for="editor">MARKDOWN</label>
      <textarea id="editor" onChange={(e) => { setSource(e.target.value); }}>{source}</textarea>
    </div>
  );
}

function Preview ({source}) {
  const wc = document.getElementById('preview');
  React.useEffect(() => {
    if (wc) {
      wc.value = source;
    }
  }, [source]);
  
  return (
    <div id="right">
      <label for="preview">HTML</label>
      <wc-markdown id="preview" highlight></wc-markdown>
    </div>
  );
}

function Application () {
  const [source, setSource] = React.useState('');
  const onEdit = React.useCallback(editorState => {
    setSource(editorState);
  }, [setSource]);
  
  return (
    <>
      <div id="header">
        <h1>Markdown Editor</h1>
      </div>
      <div id="content">
        <Editor onEdit={onEdit} />
        <Preview source={source} />
      </div>
    </>
  )
}

ReactDOM.render(<Application />, document.getElementById('app'));
