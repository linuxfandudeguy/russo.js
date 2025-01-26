export default function(source) {
  const escapedSource = source.replace(/[^\x00-\x7F]/g, (match) => {
    return '\\u' + match.charCodeAt(0).toString(16).padStart(4, '0');
  });
  
  return escapedSource;
}
