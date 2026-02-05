import React, { useState } from 'react';

export interface CodePreviewProps {
  code: string;
  language?: string;
}

export function CodePreview({ code, language = 'tsx' }: CodePreviewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const highlightCode = (code: string) => {
    return code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/(".*?")/g, '<span class="code-string">$1</span>')
      .replace(
        /\b(const|import|export|function|return|from|interface|extends|type|default|async|await)\b/g,
        '<span class="code-keyword">$1</span>'
      )
      .replace(
        /\b(React|useState|useEffect|useCallback|useMemo)\b/g,
        '<span class="code-builtin">$1</span>'
      )
      .replace(/(&lt;\/?[\w]+)/g, '<span class="code-tag">$1</span>')
      .replace(/(\{[\w\s]+\})/g, '<span class="code-bracket">$1</span>')
      .replace(/(\[[\w\s]+\])/g, '<span class="code-bracket">$1</span>');
  };

  return (
    <div className="code-preview">
      <div className="code-preview-header">
        <span className="code-preview-language">{language}</span>
        <button
          className="code-preview-copy"
          onClick={handleCopy}
          type="button"
        >
          {copied ? 'Copiado!' : 'Copiar'}
        </button>
      </div>
      <pre className="code-preview-content">
        <code dangerouslySetInnerHTML={{ __html: highlightCode(code) }} />
      </pre>
    </div>
  );
}
