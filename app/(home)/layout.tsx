import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/'>) {
  return <HomeLayout {...baseOptions()}>
     <div className="bg-yellow-100 border-yellow-400 border text-yellow-800 px-4 py-2 text-sm text-center">
        This documentation is being written.
      </div>
    {children}
    </HomeLayout>;
}
