'use client';

import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useCart } from '@/store/useCart';
import { usePreferences } from '@/store/usePreferences';
import { formatPrice } from '@/lib/currencies';

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalValue } = useCart();
  const { currency } = usePreferences();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-medium">Cart</h1>
              <p className="text-sm text-muted-foreground mt-1">{items.length} {items.length === 1 ? 'item' : 'items'}</p>
            </div>
            {items.length > 0 && <button onClick={clearCart} className="btn-ghost text-sm">Clear</button>}
          </div>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-4xl mb-4 opacity-30">🛒</div>
              <h2 className="text-lg font-medium mb-2">Your cart is empty</h2>
              <p className="text-sm text-muted-foreground mb-6">Start exploring and add items</p>
              <Link href="/" className="btn-primary">Explore</Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-3">
                {items.map(item => (
                  <div key={item.productId} className="card p-4 flex gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link href={`/product/${item.productId}`} className="text-sm font-medium hover:opacity-70 transition-opacity line-clamp-1">{item.name}</Link>
                      <p className="text-xs text-muted-foreground mt-0.5">{formatPrice(item.price, currency)} each</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <button onClick={() => updateQuantity(item.productId, item.quantity - 1)} className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-xs hover:bg-muted">-</button>
                          <span className="text-xs w-5 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.productId, item.quantity + 1)} className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-xs hover:bg-muted">+</button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium">{formatPrice(item.price * item.quantity, currency)}</span>
                          <button onClick={() => removeItem(item.productId)} className="text-muted-foreground hover:text-foreground text-xs">Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <div className="card p-6 sticky top-28">
                  <h3 className="font-medium mb-4">Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-muted-foreground"><span>Subtotal</span><span>{formatPrice(totalValue(), currency)}</span></div>
                    <div className="border-t border-border pt-2 flex justify-between"><span className="font-medium">Total</span><span className="font-medium">{formatPrice(totalValue(), currency)}</span></div>
                  </div>
                  <button onClick={() => alert('This is a fictional store. No actual transactions occur.')} className="btn-primary w-full mt-6">Checkout (Fantasy)</button>
                  <p className="text-[10px] text-muted-foreground text-center mt-3">Fictional cart. No transactions occur.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
