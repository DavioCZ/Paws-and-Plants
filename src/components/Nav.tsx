import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import CartDrawer from './CartDrawer'; // Will be created later

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Paws & Plants</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/pet-safe">Pet-Safe</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/care">Care</Link>
            <Link href="/rituals">Rituals</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* <CartDrawer /> */}
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
