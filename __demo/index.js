import React from 'react';

import ReactMarkdown from 'react-markdown';
import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from 'remark-directive-rehype';

const markdown = `
# Cat videos

::youtube-video[Video of a cat in a box]{#01ab2cd3efg}
`;

const YouTubeVideo = ({ id, children }) => (
  <iframe src={'https://www.youtube.com/embed/' + id} width="200" height="200">
    {children}
  </iframe>
);

const App = () => {
  return (
    <div>
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkDirective, remarkDirectiveRehype]}
        components={{
          'youtube-video': YouTubeVideo,
        }}
      />
    </div>
  );
};
export default App;
