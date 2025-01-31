This solution uses the `Linking.addEventListener` method to listen for incoming URLs instead of relying solely on `getInitialURL`. This approach proves more reliable across both Android and iOS platforms.

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrl = (event) => {
      setInitialUrl(event.url);
    };

    Linking.addEventListener('url', handleUrl);

    return () => {
      Linking.removeEventListener('url', handleUrl);
    };
  }, []);

  return (
    <View>
      {initialUrl ? (
        <Text>Deep link received: {initialUrl}</Text>
      ) : (
        <Text>Waiting for a deep link...</Text>
      )}
    </View>
  );
}
export default App; 
```