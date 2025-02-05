import { BookText, DatabaseIcon, FlagIcon, GlobeLockIcon } from 'lucide-react';

import CacheViewer from './CacheViewer';
import FeatureFlagViewer from './FeatureFlagViewer';
import MetadataViewer from './MetadataViewer';
import PostgresViewer from './PostgresViewer';
import FloatPanel from './features/FloatPanel';

const DevPanel = () => (
  <FloatPanel
    items={[
      {
        children: <PostgresViewer />,
        icon: <DatabaseIcon size={16} />,
        key: 'Postgres Viewer',
      },
      {
        children: <MetadataViewer />,
        icon: <BookText size={16} />,
        key: 'SEO Metadata',
      },
      {
        children: <CacheViewer />,
        icon: <GlobeLockIcon size={16} />,
        key: 'NextJS Caches',
      },
      {
        children: <FeatureFlagViewer />,
        icon: <FlagIcon size={16} />,
        key: 'Feature Flags',
      },
    ]}
  />
);

export default DevPanel;
