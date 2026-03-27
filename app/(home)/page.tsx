import Link from "next/link";
import Image from "next/image";
import { Card, Cards } from "fumadocs-ui/components/card";
import { baseOptions } from "@/lib/layout.shared";




export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 py-16">
  
      <Image
        src="/banner.webp"
        alt="Web Cookbook Banner"
        width={1200}
        height={400}
        className="w-full max-w-4xl mx-auto mb-8 rounded-lg"
        priority
      />
      <h1 className="text-4xl font-bold mb-4">Web Cookbook</h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-md mx-auto">
        Simple. Direct. Effective.
      </p>
      <div className="flex gap-4 justify-center mb-16">
        <Link
          href="/docs"
          className="px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
        >
          Get Started
        </Link>
      </div>

      <Cards>
        <Card
          title="Documentation"
          description="Learn how to use this documentation site and explore the content."
          href="/docs"
        />
        <Card
          title="Contributing"
          description="Found an issue or want to contribute? Check out our contribution guidelines."
          href={`${baseOptions().githubUrl}/blob/main/CONTRIBUTING.md`}
          external
        />
      </Cards>
    </div>
  );
}
