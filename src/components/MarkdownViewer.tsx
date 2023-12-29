import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
export default function MarkdownViewer({content}: {content: string}) {
  return (
    <ReactMarkdown
      className=" prose max-w-none"
      remarkPlugins={[remarkGfm]}
      /* components={{
        code({ node, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag="div"
              {...props}
              style={materialDark}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }} */
      >
      {content}
    </ReactMarkdown>
  );
}

