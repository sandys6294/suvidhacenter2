import { Component, HostListener, OnInit } from '@angular/core';

interface Dish {
  name: string;
  cat: string;
  veg: boolean;
  spice: number;
  price: number;
  img: string;
  tag: string;
  special?: boolean;
  desc: string;
}

interface Review {
  text: string;
  name: string;
  tag: string;
  stars: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  brand = {
    name: 'Suvidha Center',
    sub: 'Homemade · Made to order',
    lede: 'Small-batch Indian food cooked fresh in a home kitchen and made to your order. No preservatives, no shortcuts — just the food you’d get at a friend’s dining table.',
    address: 'Home kitchen serving Arera Colony, Bhopal. Fresh meals cooked to order, delivered nearby or ready for pickup.',
    hours: 'Tue–Sun · 11am–9pm',
  };

  whatsappNumber = '919876543210';
  activeCat = 'All';
  vegOnly = false;
  isMobileMenuOpen = false;

  categories = ['All', 'Sweets', 'Pickles', 'Snacks'];

  dishes: Dish[] = [
    { name: 'Aam Murrabba', cat: 'Sweets', veg: true, spice: 0, price: 120, img: 'images/foodimage/all.png', tag: 'Special', special: true, desc: 'Sweet mango preserve with aromatic spices — a classic homemade treat.' },
    { name: 'Aamla Murrabba', cat: 'Sweets', veg: true, spice: 0, price: 125, img: 'images/foodimage/all.png', tag: '', desc: 'Tart and sweet gooseberry preserve made with traditional spices.' },
    { name: 'Shakkar Para', cat: 'Sweets', veg: true, spice: 0, price: 80, img: 'images/foodimage/Bijori.png', tag: '', desc: 'Crisp, caramelized pastry bites tossed in a light sugar glaze.' },
    { name: 'Khurmi', cat: 'Sweets', veg: true, spice: 0, price: 75, img: 'images/foodimage/Khurmi.png', tag: '', desc: 'Golden, flaky sweet khurma with a hint of cardamom.' },
    { name: 'Peedia', cat: 'Sweets', veg: true, spice: 0, price: 85, img: 'images/foodimage/Bijori.png', tag: '', desc: 'Soft, tender peda made from milk, sugar, and a dusting of nutmeg.' },
    { name: 'Khaaja', cat: 'Sweets', veg: true, spice: 0, price: 90, img: 'images/foodimage/Bijori.png', tag: '', desc: 'Layered pastry soaked in sweet syrup for a crisp, juicy bite.' },
    { name: 'Murra Laddu', cat: 'Sweets', veg: true, spice: 0, price: 95, img: 'images/foodimage/muruku.png', tag: '', desc: 'Rich sweet laddus made with roasted gram flour and ghee.' },
    { name: 'Besan Laddu', cat: 'Sweets', veg: true, spice: 0, price: 95, img: 'images/foodimage/muruku.png', tag: '', desc: 'Traditional besan laddus with warm cardamom and roasted nuts.' },
    { name: 'Gujia', cat: 'Sweets', veg: true, spice: 0, price: 110, img: 'images/foodimage/Bijori.png', tag: '', desc: 'Crisp fried dumplings stuffed with sweet khoya and nuts.' },
    { name: 'Kari Laddu', cat: 'Sweets', veg: true, spice: 0, price: 95, img: 'images/foodimage/muruku.png', tag: '', desc: 'Soft, aromatic laddus made from coconut, sugar, and ghee.' },
    { name: 'Balushahi', cat: 'Sweets', veg: true, spice: 0, price: 100, img: 'images/foodimage/all.png', tag: '', desc: 'Buttery, melt-in-your-mouth sweets glazed with sugar syrup.' },
    { name: 'Aam Pickle', cat: 'Pickles', veg: true, spice: 2, price: 140, img: 'images/foodimage/all.png', tag: '', desc: 'Tangy mango pickle with mustard and fenugreek spices.' },
    { name: 'Nimbu Pickle', cat: 'Pickles', veg: true, spice: 2, price: 130, img: 'images/foodimage/Bijori.png', tag: '', desc: 'Homestyle lemon pickle with a punch of chili and salt.' },
    { name: 'Kathal Pickle', cat: 'Pickles', veg: true, spice: 2, price: 150, img: 'images/foodimage/Bijori.png', tag: '', desc: 'Jackfruit pickle simmered in rich masala for deep savory flavor.' },
    { name: 'Aamla Pickle', cat: 'Pickles', veg: true, spice: 2, price: 140, img: 'images/foodimage/all.png', tag: '', desc: 'Amla pickle with tangy, spicy notes and a home-kitchen crunch.' },
    { name: 'Mirch Pickle', cat: 'Pickles', veg: true, spice: 3, price: 130, img: 'images/foodimage/Bijori.png', tag: '', desc: 'Spicy green chili pickle made fresh with mustard oil and spices.' },
    { name: 'Bijjouri', cat: 'Snacks', veg: true, spice: 1, price: 90, img: 'images/foodimage/Bijori.png', tag: '', desc: 'Crunchy sweet-salty biscuits that are perfect with chai.' },
    { name: 'Leibadi', cat: 'Snacks', veg: true, spice: 1, price: 95, img: 'images/foodimage/rakhiyabadi.png', tag: '', desc: 'Crisp, spiced savory bites made from rice flour and sesame.' },
    { name: 'Chota Badi', cat: 'Snacks', veg: true, spice: 1, price: 95, img: 'images/foodimage/kumdhabadi.png', tag: '', desc: 'Small spiced badi pieces fried to golden crunchiness.' },
    { name: 'Namkeen (Saloni)', cat: 'Snacks', veg: true, spice: 1, price: 80, img: 'images/foodimage/all.png', tag: '', desc: 'Light and savory namkeen made with traditional spice blend.' },
    { name: 'Rice Papad', cat: 'Snacks', veg: true, spice: 1, price: 70, img: 'images/foodimage/ricepapad.png', tag: '', desc: 'Thin, crisp rice papad seasoned for a crunchy snack.' },
    { name: 'Kumhda Badi (Pumpkin Badi)', cat: 'Snacks', veg: true, spice: 1, price: 110, img: 'images/foodimage/kumdhabadi.png', tag: '', desc: 'Pumpkin-flavored badi with warm spices and nutty crunch.' },
    { name: 'Murrku (Patla,Mota)', cat: 'Snacks', veg: true, spice: 1, price: 100, img: 'images/foodimage/muruku.png', tag: '', desc: 'Savory murukku in thin and thick varieties for snacking.' },
    { name: 'Rakhiya Badi', cat: 'Snacks', veg: true, spice: 1, price: 95, img: 'images/foodimage/rakhiyabadi.png', tag: '', desc: 'Crispy, braided badi that pairs perfectly with tea.' },
    { name: 'Thethri', cat: 'Snacks', veg: true, spice: 1, price: 90, img: 'images/foodimage/Thethri.png', tag: '', desc: 'Crunchy thethri with a savory spice mix for a homestyle bite.' }
  ];

  reviews: Review[] = [
    { text: 'The rajma chawal tastes exactly like my mother’s. I order every Sunday now.', name: 'Ananya S.', tag: 'Regular since 2023', stars: 5 },
    { text: 'Ordered a full biryani for 8 people last minute over WhatsApp. Confirmed in two minutes and it was spot on.', name: 'Rahul M.', tag: 'Family orders', stars: 5 },
    { text: 'Finally, food that isn’t drowning in oil. You can taste that it’s actually home-cooked.', name: 'Priya K.', tag: 'Weekday lunches', stars: 5 }
  ];

  get filteredDishes(): Dish[] {
    return this.dishes.filter(d =>
      (this.activeCat === 'All' || d.cat === this.activeCat) &&
      (!this.vegOnly || d.veg)
    );
  }

  currentYear = new Date().getFullYear();

  get specialDish(): Dish {
    return this.dishes.find(d => d.special) || this.dishes[0];
  }

  get specialOrderLink(): string {
    return this.getWaLink(`Hi! I'd like to order today's special: ${this.specialDish.name} (₹${this.specialDish.price}). Quantity: `);
  }

  getDishOrderLink(dish: Dish): string {
    return this.getWaLink(`Hi! I'd like to order: ${dish.name} (₹${dish.price}). Quantity: `);
  }

  ngOnInit(): void {
    document.title = `${this.brand.name} · Homemade meals made with love`;
  }

  setCategory(category: string): void {
    this.activeCat = category;
  }

  toggleVeg(): void {
    this.vegOnly = !this.vegOnly;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  getWaLink(message: string): string {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  get spiceStars(): number[] {
    return [1, 2, 3];
  }

  get initials(): (review: Review) => string {
    return review => review.name.split(' ').map(word => word[0]).slice(0, 2).join('');
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 720) {
      this.isMobileMenuOpen = false;
    }
  }
}
