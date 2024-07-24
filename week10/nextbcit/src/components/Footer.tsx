import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-muted p-6 md:py-8 w-full">
      <div className="container max-w-7xl flex items-center justify-between">
        <div className="text-sm font-medium">JSPNote</div>
        <div className="text-sm font-medium">
          <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
            Contact Us
          </Link>
        </div>
      </div>
      <div className="container max-w-7xl mt-4 text-sm text-muted-foreground">
        &copy; 2024 JSPNote. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
