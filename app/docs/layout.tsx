import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (<>
      <div className="bg-yellow-100 border-yellow-400 border text-yellow-800 px-4 py-2 text-sm text-center">
        This documentation is being written.
      </div>
      <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
      
      {children}
    </DocsLayout>
  </>
    
  );
}
